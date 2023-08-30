import Image from "next/image";
import img1 from "/public/images/devjeans.png"

export default function Create() {
  return (
    <>
    Create!!
    <p><Image src="/public/images/devjeans.png" alt="" width={100} height={100} /></p>
    <p><Image src={img1} alt="" width={100} height={100} /></p>
    </>
  )
}