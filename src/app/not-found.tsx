import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[64px] md:mt-[104px] gap-6 md:gap-10 h-screen min-h-[500px] max-h-[1000px] mb-[62px] md:mb-[104px] w-full max-w-[1130px] mx-auto'>
        <h1 className={`${inter.className} capitalize font-bold text-center text-[107px]/[160px] md:text-[217px]/[325px] lg:text-[250px]/[250px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF0080] to-[#FF8C00]`}>
            Oops!
        </h1>
        <div className="flex flex-col gap-6 items-center justify-center text-center max-w-[500px] mx-auto">
            <h2 className={`uppercase ${inter.className} text-[22px]/[22px] md:text-[29px]/[29px] font-semibold`}>
                404 - PAGE NOT FOUND
            </h2>
            <p className={`text-center ${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] font-normal text-black`}>
                The page you are looking for might have been removed, had it’s name changed or is temporarily unavailable.
            </p>
        </div>
        <Link href="/">
            <button className={`${inter.className} text-[16px]/[16px] font-semibold text-white bg-[#F4844C] rounded-[16px] px-[24px] py-[16px] hover:bg-[#F4844C]/[0.8] transition-all cursor-pointer capitalize duration-300`}>
                return to homepage
            </button>
        </Link>
    </div>
  )
}

export default NotFound;