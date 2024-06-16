'use client'

import { useEffect } from 'react'

export default function notFound() {
  // 404 페이지 진입 시 메인으로 리다이렉트
  useEffect(() => {
    window.location.href = '/'
  }, [])

  return (
    <div className="bg-black min-[576px]:min-w-[576px]">
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-white font-laundry-regular">
          페이지를 찾을 수 없습니다.
        </div>
      </div>
    </div>
  )
}
