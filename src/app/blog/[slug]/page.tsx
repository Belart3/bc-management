import blogs from '@/data/blogData.json'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import BlogListItem from '@/components/BlogListItem'
import blogData from '@/data/blogData.json'
import Link from 'next/link'
import { Metadata } from 'next'


const inter = Inter(
  { 
    subsets: ['latin'] ,
    variable: "--font-inter",
  }
)

export async function generateStaticParams() {
  return blogs.map((b) => ({
      slug: b.url.toLowerCase(),
  }))
}


export const metadata: Metadata = {
  title: ``,
  description: "Discover BCM's mission to provide innovative blockchain and DeFi management services. Our expert team is dedicated to simplifying your crypto tax obligations and maximizing your portfolio's potential.",
  keywords: "About BCM, BlockChain Management, crypto tax services, DeFi management, blockchain solutions, crypto portfolio optimization, tax compliance, crypto asset management",
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const blog = blogs.find(b => b.url.toLowerCase() === slug.toLowerCase())
    if (!blog) {
      return notFound()
    }

    const truncateText = ( text: string, textLimit: number ) => {
      const words = text.split('');
      if (words.length > textLimit) {
        return words.slice(0, textLimit).join('') + "...";
      }
      return text;
    }

    return (
      <article className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:max-w-[1130px] mx-auto mb-16 lg:mb-26'>
        <div className="flex flex-col gap-12 md:gap-16 w-full">
          <div className='flex flex-col gap-2 md:gap-4 items-center '>
            <h4 className={`${inter.className} text-center text-[#666666] text-[14px]/[21px] md:text-[16px]/[24px] font-normal`}>{blog.date}</h4>
            <h1 className={`${inter.className} text-center text-black text-[32px]/[32px] md:text-[53px]/[53px] font-medium`}>{blog.title}</h1>
          </div>
          <div style={{ backgroundImage: `url(${blog.image})` }} className="bg-center w-full h-75 md:h-[500px] bg-cover"></div>
          <div className="flex flex-col gap-12 md:gap-16">
            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
              {blog.content?.introduction}
            </p>
          </div>
            {
              blog.content?.sections.map((section, index) => (
                <div className="flex flex-col gap-6 md:gap-8" key={index}>
                  <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                    {section.heading}
                  </h2>
                  <div className="flex flex-col gap-2 md:gap-4">
                    <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                      {section.content}
                    </p>
                    {
                      section.list && (
                        <ul className="flex flex-col gap-1" key={index}>
                          {
                            section.list.map((item, index) => (
                              <BlogListItem title={item.title} description={'description' in item ? item.description : ''} index={index} key={index} />
                            ) )
                          }
                        </ul>
                      )
                    }
                    {
                      section.steps && (
                        <ul className="flex flex-col gap-1" key={index}>
                          {
                            section.steps.map((item, index) => (
                              <BlogListItem title={item.title} index={index} description={item.description} key={index} />
                            ) )
                          }
                        </ul>
                      )
                    }
                  </div>
                </div>
              ))
            }
            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
              {blog.cta?.text} 
               <span>
                 <a href={blog.cta?.url} className={`${inter.className} text-[#F4844C] mx-1 font-normal text-[16px]/[24px]`}>
                  bcmanagement.us 
                </a>
              </span>
              to learn more
            </p>
        </div>
        {/* more articles section */}
        <div className='flex flex-col gap-12 md:gap-16 w-full mt-[104px] md:mt-[168px] items-center'>
          <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium capitalize`}>
            More Articles For You
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                blogData.filter((blogs) => blogs.url !== blog.url ).slice(0, 3).map((blog) => (
                    <div className="border border-[#E6E6E6] bg-white rounded-lg group transition-all ease-in-out duration-300 cursor-pointer lg:hover:drop-shadow-lg" key={blog.id}>
                        <Link href={`/blog/${blog.url.toLowerCase()}`} >
                            <div className="flex flex-col">
                                <div className="h-30 md:h-53 w-full bg-cover bg-no-repeat bg-center bg-[url('/images/blogs/How-To-Master-Blockchain-Management-Accurate-Tax-Calculations-Made-Easy.png')] rounded-t-lg" style={{backgroundImage: `url(${blog.image})`}}></div>
                                <div className="flex flex-col p-3 md:p-5 gap-2 md:gap-4">
                                    <p className={`${inter.className} text-[#F4844C] text-start text-[12px]/[12px] md:text-[16px]/[24px] font-normal capitalize`}>
                                        {blog.date}
                                    </p>
                                    <p className={`${inter.className} text-black text-start text-[18px]/[24px] md:text-[20px]/[26px] font-medium capitalize transition-colors ease-in-out duration-300 lg:group-hover:text-[#F4844C]`}>
                                        {truncateText(blog.title, 60)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
          </div>
          </div>
      </article>
    )
  }