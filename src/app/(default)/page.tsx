import Image from "next/image";
import Link from "next/link";
import Modal from "./_component/Modal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        첫 진입되는 페이지
        <br />
        <Link href="/landing">
          서비스 소개 바로가기
        </Link>
        <br />
        <Link href="/comming-soon">
          comming soon ~
        </Link>
        <br />
        <Modal />
      </div>
    </div>
  );
}
