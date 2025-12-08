import React from 'react'
import { Inter } from 'next/font/google';
import blogData from "@/data/blogData.json"
import Link from 'next/link';
import { Metadata } from 'next';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Blockchain and DeFi Financial Strategies (BCM Blog)",
    description: "Stay informed with BCM’s blog—expert insights on blockchain, DeFi, and finance. Learn to reduce liability and maximize deductions.",
    keywords: "Optimize crypto wealth, Blockchain tax efficiency, DeFi investment strategies, Crypto wealth optimization, Tax-efficient blockchain strategies, Maximize DeFi Crypto profits, Long-term crypto growth, Blockchain risk management, DeFi financial planning, Crypto tax and wealth strategies, BCM blog, Blockchain Management blog, BCM insights, Crypto tax strategies, DeFi investment insights",
};


const Blog = () => {
    const truncateText = ( text: string, textLimit: number ) => {
        const words = text.split('');
        if (words.length > textLimit) {
            return words.slice(0, textLimit).join('') + "...";
        }
        return text;
    }
  return (
    <div className='mt-35 md:mt-54 lg:mt-56 flex flex-col gap-12 md:gap-16 mb-16 md:mb-[104px] max-w-[1130px] mx-auto'>
        <div className="flex items-center justify-center max-w-[700px] mx-auto">
            <h1 className={`${inter.className} text-black text-center text-[32px]/[32px] md:text-[53px]/[53px] font-medium`}>
                News, Tips and Resources from BCM
            </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                blogData.map((blog) => (
                    <div className="border border-[#E6E6E6] bg-white rounded-lg group transition-all ease-in-out duration-300 cursor-pointer lg:hover:drop-shadow-lg" key={blog.id}>
                        <Link href={`/blog/${blog.url.toLowerCase()}`} >
                            <div className="flex flex-col">
                                <div className="h-30 md:h-53 w-full bg-cover bg-no-repeat bg-center bg-[url('/images/blogs/How-To-Master-Blockchain-Management-Accurate-Tax-Calculations-Made-Easy.png')] rounded-t-lg" style={{backgroundImage: `url(${blog.image})`}}></div>
                                <div className="flex flex-col p-3 md:p-5 gap-2 md:gap-4">
                                    <h3 className={`${inter.className} text-[#F4844C] text-start text-[12px]/[12px] md:text-[16px]/[24px] font-normal capitalize`}>
                                        {blog.date}
                                    </h3>
                                    <h2 className={`${inter.className} text-black text-start text-[18px]/[24px] md:text-[20px]/[26px] font-medium capitalize transition-colors ease-in-out duration-300 lg:group-hover:text-[#F4844C]`}>
                                        {truncateText(blog.title, 60)}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blog