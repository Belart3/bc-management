import blogs from '@/data/blogData.json'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlogListItem from '@/components/BlogListItem'

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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const blog = blogs.find(b => b.url.toLowerCase() === slug.toLowerCase())
    if (!blog) {
      return notFound()
    }
    return (
      <article className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:max-w-[1130px] mx-auto mb-16 lg:mb-26 md:gap-16'>
        <div className="flex flex-col gap-12 md:gap-16 w-full">
          <div className='flex flex-col gap-2 md:gap-4 items-center '>
            <h4 className={`${inter.className} text-center text-[#666666] text-[14px]/[21px] md:text-[16px]/[24px] font-normal`}>{blog.date}</h4>
            <h1 className={`${inter.className} text-center text-black text-[32px]/[32px] md:text-[53px]/[53px] font-medium`}>{blog.title}</h1>
          </div>
          <div className={`bg-[url(${blog.image})] bg-center w-full h-[500px] bg-cover`}></div>
          <div className="flex flex-col gap-12 md:gap-16">
            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
              {blog.content?.introduction}
            </p>
          </div>
            {
              blog.content?.sections.map((section, index) => (
                <div className="flex flex-col gap-6 md:gap-8" key={index}>
                  <h2 className={`${inter.className} text-black text-[22px]/[22px] font-medium`}>
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
                              <BlogListItem title={item.title} description={item.description} index={index} key={index} />
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
      </article>
    )
  }