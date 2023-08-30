import Image from "next/image";
import img1 from "/public/images/devjeans.png"

export default function Home() {
  return (
    <div>
      <h1> WelCome </h1>
      <h2>Hello, WEB!!</h2>
      {/* 해당 이미지를 따로 import 하지않으면 너비와 높이를 무조건 지정해야한다. 안하면 오류남!!! */}
      <p><Image src="/images/Jaguar-XJ.jpg" width={100} height={100} /> </p>
      <p><Image src={img1} /></p>
    </div>
  )
}