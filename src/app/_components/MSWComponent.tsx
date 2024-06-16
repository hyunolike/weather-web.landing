'use client'
import { useEffect } from 'react'

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      //클라이언트 환경에서만 실행 (브라우저)
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        require('@/mocks/browser') //클라이언트 환경에서 네트워크 가로채기를 위한 msw 설정
      }
    }
  }, [])

  return null
}
