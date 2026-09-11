'use server'

import { headers } from 'next/headers'
import { Prisma, SendType } from '@prisma/client'
import prisma from '@/commons/prisma'
import { SignupState } from '@/types/signup'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 동일 IP 의 반복 신청 차단 기준 (이슈 #17)
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_COUNT = 3

const getClientIp = (): string => {
  const headerList = headers()
  // 프록시를 거치므로 x-forwarded-for 의 첫 번째 값이 실제 클라이언트 IP
  const forwardedFor = headerList.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim().slice(0, 45)
  }
  return (headerList.get('x-real-ip') ?? 'unknown').slice(0, 45)
}

const signup = async (
  _prevState: SignupState,
  formData: FormData,
): Promise<SignupState> => {
  const email = String(formData.get('email') ?? '').trim()
  // 체크되지 않은 체크박스는 FormData 에 포함되지 않는다
  const isAgreed = formData.get('privacyAgreement') !== null
  const sendType =
    formData.get('sendType') === SendType.non_member
      ? SendType.non_member
      : SendType.member

  if (!email) {
    return { status: 'error', message: '이메일을 입력해 주세요.' }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: '이메일 형식을 다시 확인해 주세요.' }
  }
  if (!isAgreed) {
    return {
      status: 'error',
      message: '개인정보 수집 및 이용에 동의해 주세요.',
    }
  }

  const ip = getClientIp()

  try {
    // 차단 목록에 있는 이메일/IP 인지 확인
    const blocked = await prisma.spamList.findFirst({
      where: { blocked: true, OR: [{ email }, { ip }] },
      select: { id: true },
    })
    if (blocked) {
      return { status: 'error', message: '신청이 제한된 요청입니다.' }
    }

    // 짧은 시간에 반복 신청하는 요청 차단
    const recentCount = await prisma.sendList.count({
      where: {
        ip,
        createdAt: { gte: new Date(Date.now() - RATE_LIMIT_WINDOW_MS) },
      },
    })
    if (recentCount >= RATE_LIMIT_COUNT) {
      return {
        status: 'error',
        message: '요청이 너무 잦습니다. 잠시 후 다시 시도해 주세요.',
      }
    }

    await prisma.sendList.create({
      data: { email, ip, sendType },
    })

    return {
      status: 'success',
      message: '신청이 완료되었어요! 서비스 오픈 시 메일로 알려드릴게요.',
    }
  } catch (err) {
    // email unique 제약 위반 = 이미 신청한 이메일
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === 'P2002'
    ) {
      return { status: 'error', message: '이미 신청이 완료된 이메일이에요.' }
    }

    console.error('[signup] 신청 처리에 실패했습니다.', err)
    return {
      status: 'error',
      message: '일시적인 오류가 발생했어요. 잠시 후 다시 시도해 주세요.',
    }
  }
}

export default signup
