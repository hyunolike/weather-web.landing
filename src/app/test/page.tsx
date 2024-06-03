// app/page.tsx
import {Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

export default function Page() {
    return (
        <div>
            {/*시간을 알려주는 코드를 작성*/}
            <p>{new Date().toLocaleString()}</p>
            {/*시간이 초단위로 움직이는 코드를 작성*/}
            <p>{new Date().toLocaleTimeString()}</p>
            <Button>Click me</Button>
            <Image
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
        </div>
    )
}