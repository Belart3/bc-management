"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sling as Hamburger } from 'hamburger-react'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

//type Props = {}

const Navbar = () => {
  return (
    <nav className='px-4 py-3 md:px-5 md:py-4 flex flex-row justify-between items-center rounded-xl md:rounded-3xl bg-[#ffffffd0] border border-[#E6E6E6] shadow-lg w-[90%] fixed left-[50%] -translate-x-[50%] lg:max-w-[1130px] top-5 md:top-10 z-50 backdrop-blur-[15px]'>
        <Link href="/">
            <Image src="/logo.svg" height={40} width={120} alt='BlockChain Management' className='h-8 w-[94px]' />
        </Link>
        <ul className='hidden flex-row items-center gap-x-2 xl:gap-x-6 lg:flex'>
            <Link href="/#problems">
                <li className={`capitalize text-[16px]/[16px] font-normal text-black ${inter.className}`}>
                    your problem
                </li>
            </Link>
            <Link href="">
                <li className={`capitalize text-[16px]/[16px] font-normal text-black ${inter.className}`}>
                    our solution
                </li>
            </Link>
            <Link href="">
                <li className={`capitalize text-[16px]/[16px] font-normal text-black ${inter.className}`}>
                    about us
                </li>
            </Link>
            <Link href="/contact-us">
                <li className={`capitalize text-[16px]/[16px] font-normal text-black ${inter.className}`}>
                    contact us
                </li>
            </Link>
            <Link href="/blog">
                <li className={`capitalize text-[16px]/[16px] font-normal text-black ${inter.className}`}>
                    blog
                </li>
            </Link>
        </ul>
        <ul className='hidden flex-row items-center gap-x-2 xl:gap-x-6 lg:flex'>
            <Link href="">
                <li className={`capitalize text-[16px]/[16px] font-medium text-black ${inter.className}`}>
                    become an affiliate
                </li>
            </Link>
            <Link href="">
                <button className={`capitalize text-[16px]/[16px] font-normal text-white bg-[#F4844C] rounded-2xl px-6 py-4 ${inter.className} cursor-pointer`}>
                    get started
                </button>
            </Link>
        </ul>
        <button className='flex lg:!hidden'>
            <Hamburger size={40}/>
        </button>
    </nav>
  )
}
export default Navbar