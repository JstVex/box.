import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <div>
        box.
      </div> */}
      <div className="flex w-full h-screen">
        <div className="relative flex flex-col items-center justify-center w-[50vw] h-screen bg-black text-white">
          <div className="absolute right-4 top-28 text-6xl font-semibold">
            Choose
          </div>
          <Link href="/whitebox" className="w-40 h-40 bg-white transform transition-transform duration-300 origin-center hover:rotate-45 cursor-pointer"></Link>
        </div>
        <div className="relative flex flex-col items-center justify-center w-[50vw] h-screen bg-white text-black">
          <div className="absolute left-4 top-28 text-6xl font-semibold">
            a box
          </div>
          <Link href="/blackbox" className="w-40 h-40 bg-black transform transition-transform duration-300 origin-center hover:rotate-45 cursor-pointer"></Link>
        </div>
      </div>
    </div>
  )
}
