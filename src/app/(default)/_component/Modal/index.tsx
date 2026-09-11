'use client'

import styles from './Modal.module.scss'
import Image from 'next/image'
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Link,
  Modal as NextModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { MdMail } from 'react-icons/md'
import { GoAlertFill } from 'react-icons/go'
import { GoCheckCircleFill } from 'react-icons/go'
import { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import onSubmit from '@/app/(default)/_lib/signup'
import { INITIAL_SIGNUP_STATE } from '@/types/signup'

type Props = {
  // 정회원(member) / 체험유저(non_member) 구분해서 저장한다
  sendType?: 'member' | 'non_member'
}

// useFormStatus 는 form 의 자식 컴포넌트에서만 제출 상태를 읽을 수 있다
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className={styles.modalEmailButton}
      isLoading={pending}
      isDisabled={pending}
    >
      입장하기
    </Button>
  )
}

export default function Modal({ sendType = 'member' }: Props) {
  const router = useRouter()

  // 신청 결과 안내 모달 상태값
  const { isOpen, onOpen, onClose } = useDisclosure()

  // server action 결과 상태값
  const [state, formAction] = useFormState(onSubmit, INITIAL_SIGNUP_STATE)

  // 이메일 상태값
  const [email, setEmail] = useState('')
  const onChangEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const isSuccess = state.status === 'success'

  // 제출이 끝나면 결과 안내 모달을 띄운다
  useEffect(() => {
    if (state.status !== 'idle') {
      onOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const handleClose = () => {
    onClose()
    // 신청에 성공한 경우에만 메인으로 돌아간다
    if (isSuccess) {
      router.back()
    }
  }

  // 모달 배경 클릭 시 메인으로 리다이렉트
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      router.back()
    }
  }

  return (
    <div className={styles.modalBackgroud} onClick={handleBackgroundClick}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div>
            {/* Next.js 이미지 최적화 */}
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div className={styles.modalTitle}>날씨의 속삭임 입장하기</div>
          <div className={styles.modalInfo}>
            <p>날씨의 속삭임 회원만을 위한 공간이에요.</p>
            <p>오픈이후 순차적으로 가입 알림이 발송될 예정입니다.</p>
          </div>
        </div>
        <div className={styles.modalServiceSection}>
          <div className={styles.modalServiceInfo}>
            현재 대기인원은 00명 입니다. 🧑🏻‍💻 새로운 차원의 경험 오직 날씨의
            속삭임에서만
          </div>
        </div>
        <div>
          {/* server action */}
          <form action={formAction}>
            <input type="hidden" name="sendType" value={sendType} />
            <div className={styles.modalEmailSection}>
              <div className={styles.modalEmailForm}>
                <Input
                  type="email"
                  label="이메일"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                  name="email" //이 값을 이용해 데이터 처리 (server action)
                  value={email}
                  startContent={
                    <MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  isClearable
                  onChange={onChangEmail}
                />
              </div>
              <div className={styles.modalEmailBtnSection}>
                <SubmitButton />
              </div>
            </div>
            {/* 개인정보 수집 동의 (이메일, IP 를 저장하므로 필수) */}
            <div className="font-laundry-regular pt-3">
              <Checkbox name="privacyAgreement" size="sm">
                <span className="text-tiny">
                  개인정보 수집 및 이용에 동의합니다. (필수)
                </span>
              </Checkbox>
              <p className="pl-6 text-tiny text-default-500">
                수집 항목: 이메일, IP 주소 / 목적: 서비스 오픈 알림 발송
              </p>
            </div>
          </form>
          <div className={styles.modalFullM}>
            <Card>
              <CardHeader className={styles.modalFullMInfo}>
                <Link isExternal showAnchorIcon href="/">
                  날씨의 속삭임 입장하기 알아보기
                </Link>
              </CardHeader>
              <CardFooter className={styles.modalInfo}>
                <p>입장하기 프로세스에 대해 알려드리고 있어요!</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* 신청 결과 안내 */}
        <NextModal backdrop="blur" isOpen={isOpen} onClose={handleClose}>
          <ModalContent className="font-laundry-regular flex justify-center items-center">
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div
                  className={`flex justify-center ${isSuccess ? 'text-green-500' : 'text-amber-500'}`}
                >
                  {isSuccess ? (
                    <GoCheckCircleFill className="w-10 h-10" />
                  ) : (
                    <GoAlertFill className="w-10 h-10" />
                  )}
                </div>
                <div>
                  {isSuccess
                    ? '날씨의속삭임 사전 신청 완료'
                    : '안내 말씀드려요'}
                </div>
              </ModalHeader>
              <ModalBody>
                <p>{state.message}</p>
                {isSuccess && (
                  <p>
                    안정적인 서비스 제공으로 보답하겠습니다. <br />
                    감사합니다. :)
                  </p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-black text-white"
                  onPress={() => handleClose()}
                >
                  확인
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </NextModal>
      </div>
    </div>
  )
}
