'use client'

import styles from './Modal.module.scss'
import Image from 'next/image'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Link,
} from '@nextui-org/react'
import { MdMail } from 'react-icons/md'

export default function Modal() {
  // 모달 배경 클릭 시 메인으로 리다이렉트
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      window.location.href = '/'
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
          <div className={styles.modalEmailSection}>
            <div className={styles.modalEmailForm}>
              <Input
                type="email"
                label="이메일"
                placeholder="you@example.com"
                labelPlacement="outside"
                startContent={
                  <MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                isClearable
              />
            </div>
            <div className={styles.modalEmailBtnSection}>
              <Button className={styles.modalEmailButton}>입장하기</Button>
            </div>
          </div>
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
      </div>
    </div>
  )
}
