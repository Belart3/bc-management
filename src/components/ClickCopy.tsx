"use client"
import { inter } from '@/app/pay/[slug]/page'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
    copyText: string,
}

const ClickCopy = (props: Props) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(props.copyText);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
    };
    return (
        <button
        onClick={handleCopy}
        className={`text-white rounded-lg cursor-pointer ease-in-out transition mx-1 p-1 ${copied ? "" : "bg-transparent"} flex flex-row items-center gap-0.5`}
        >
            <Image src="/images/copy.svg" height={24} width={24} alt="click to copy address" />
            {
            copied ? <p className={`${inter.className} text-black font-normal text-[16px]/[16px]`}>copied</p> : <p className={`${inter.className} text-black font-normal text-[16px]/[16px]`}>copy</p>
            }
        </button>
  )
}

export default ClickCopy