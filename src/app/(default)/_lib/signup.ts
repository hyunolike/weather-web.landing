'use server'

// server action 테스트 코드
export default async (formData: FormData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({email: formData.get('email')}),
      },
    )
    const data = await response.json()
    return { message: '서버 성공' }
  } catch (err) {
    return { message: '서버 오류' }
  }
}
