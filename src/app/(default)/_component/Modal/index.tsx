"use client"

import styles from './Modal.module.scss'
import Image from 'next/image'

export default function Modal(){
  return (
    <div className={styles.modalBackgroud}>
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
          <div className={styles.modalServiceInfo}>현재 대기인원은 00명 입니다. 🧑🏻‍💻 새로운 차원의 경험 오직 날씨의 속삭임에서만</div>
        </div>
        <div>
          이메일 알림 포맷
        </div>
        <div>
          날씨의 속삭임 입장하기 알아보기
        </div>
      </div>
    </div>
  )
}
