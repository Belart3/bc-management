import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter(
  { 
    subsets: ['latin'] ,
    variable: "--font-inter",
  }
)

type Props = {
    title: string | { string: any }; // Keep the type as is
    index: number,
    description?: string,
}

const BlogListItem = (props: Props) => {
  return (
    <>
        <li className={`${inter.className} text-[#333333] text-[16px]/[24px] font-bold`}>
           {props.index + 1}. {typeof props.title === 'string' ? props.title : props.title.string}
        </li>
        {
            props.description && (
                <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                    {props.description}
                </p>
            )
        }

    </>
  )
}

export default BlogListItem