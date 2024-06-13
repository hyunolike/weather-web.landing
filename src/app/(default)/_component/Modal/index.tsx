import styles from './Modal.module.scss'

export default function Modal() {
  return (
    <div className={styles.modalBackgroud}>
      <div className={styles.modal}>모달 컴포넌트</div>
    </div>
  )
}
