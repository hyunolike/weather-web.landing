import styles from './Modal.module.scss';

export default function Modal() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.test}>
        나는 모달이다.
      </div>
    </div>
  );
}