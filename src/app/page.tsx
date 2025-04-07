"use client"
import ImageSlider from "@/components/ImageSlider";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import problemSolutions from "@/data/problemsSolutions.json"
import testimonials from "@/data/testimonials.json"
import features from "@/data/features.json"
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const categories = [
    {
      id: 1,
      title: 'your problem'
    },
    {
      id: 2,
      title: 'our solution'
    }
  ]
  const [filter, setfilter] = useState('your problem');
  const [selectedCategory, setSelectedCategory] = useState("your problem")
  
  const filteredProblems = (category: string) => {
      return problemSolutions.filter(issue => issue.category == category)
  }
  const issues = filteredProblems(selectedCategory)
  return (
    <>
      <header className="bg-[#e6e6e620] h-fit md:h-[1200px] lg:h-[1150px] w-full rounded-[12px] md:rounded-[24px] pt-[122px] md:pt-[172px] 
      bg-[url(/header-orange-tint-mobile.svg),_url(/header-grid.svg)] 
      md:bg-[url(/header-orange-tint-tablet.svg),_url(/header-grid.svg)] 
      lg:bg-[url(/header-orange-tint-desktop.svg),_url(/header-grid.svg)] 

      bg-[position:50%_100px,center] bg-[length:cover,cover] 
      md:bg-[position:50%_500px,center] bg-no-repeat md:bg-[length:cover,cover] 
      lg:bg-[position:50%_-120%,center] lg:bg-[length:auto,cover] 
      backdrop-blur-[150px] mb-[128px] md:mb-[200px]">
        <div className="flex flex-col gap-6 mb-5 md:mb-0 lg:mb-[50px] mx-3 md:mx-0 max-w-[1130px] lg:mx-auto">
          <div className="flex flex-col gap-4 ">
            <h1 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] font-medium text-black text-center capitalize md:px-10`}>
              Simplify Your Crypto Taxes and Maximize Your Profits.
            </h1>
            <p className={`text-[16px]/24px md:text-[24px]/[36px] mx-[18px] ${inter.className} text-center font-normal text-[#333333] max-w-[700px] mx-auto`}>
              Stop stressing over confusing DeFi and crypto transactions. Let us handle the calculations so you can focus on growing your portfolio.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <a href="#pricing" className="w-fit">
              <button className={`capitalize text-white text-[16px]/[16px] ${inter.className} rounded-2xl bg-[#F4844C] px-6 py-4 w-full sm:w-fit max-w-[300px] cursor-pointer`}>
                get started
              </button>
            </a>
          </div>
        </div>
        <div className="flex  flex-row items-center justify-center space-x-2 w-fit relative left-[50%] md:left-[75%] lg:left-[65%] translate-x-[-50%] ">
          <Image src="/orange-arrow.svg" height={12} width={30} alt="" className="md:w-[57px]  md:h-[25px]" />
          <p className={`text-[#DD4A00] text-[8px]/[8px] md:text-[16px]/[16px] font-bold ${inter.className} rotate-12`}>
            Watch Video
          </p>
        </div>
        <div className="p-2 md:p-6 h-75 md:h-150 rounded-xl md:rounded-3xl bg-[#00000010] border-[0.5px]  md:border border-[#999999] mt-3 w-[calc(100%-16px)] md:w-[calc(100%-40px)] lg:w-[calc(100%-230px)] mx-auto max-w-[1200px] relative -bottom-[20px] md:-bottom-[20px] lg:-bottom-[30px] backdrop-blur-[15px] md:backdrop-blur-[30px] shadow-2xl">
          <div className="w-[calc(100%-1px)] h-[calc(100%-1px)] relative rounded-xl overflow-hidden flex items-center justify-center">

            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#DD4A00_0deg,transparent_90deg)]"></div>

            <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] backdrop-blur-[10px] rounded-[10px] bg-gray-100">
              <div className="h-full w-full backdrop-blur-[10px] rounded-[10px] bg-[#00000080] mx-auto my-auto p-1 md:p-2 border-[4px] border-[#F4844C60]">
                <div className="bg-black h-full w-full rounded-[6px]">
                  <video playsInline autoPlay controls loop preload="none" className="h-auto w-full rounded-sm md:rounded-lg" >
                    <source src="/videos/Defi crypto tax services and Defi blockchain tax management.mp4" type="video/mp4" className=" " />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ImageSlider />
        <SectionWrapper id="problems">
          <SectionTitle 
            title="Seamless DeFi Tax Calculation." 
            paragraph="Effortlessly track and calculate DeFi taxes with accurate cost basis, wallet consolidation, and audit-ready reports."
          />
          <div className="flex flex-row items-center p-2 rounded-[24px] bg-[#E6E6E666] max-w-[400px] mx-auto">
            {categories.map((category) => (
              <button className={`rounded-2xl py-4 px-6 flex items-center justify-center text-black ${inter.className} text-[16px]/[16px] font-medium capitalize cursor-pointer ${ filter == category.title ? ' bg-white border border-[#E6E6E6] drop-shadow-lg' : 'bg-transparent shadow-none border-none drop-shadow-none' }`} onClick={
                () => {
                  setfilter(category.title)
                  setSelectedCategory(category.title)
                }
              } key={category.id}>
                {category.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4 max-w-sm mx-auto sm:grid sm:grid-rows-2 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto lg:flex lg:flex-row lg:gap-4 lg:max-w-[1130px] overflow-hidden">
            <AnimatePresence>
            {
              issues.map((issue) => (
                <motion.div 
                  className="flex flex-col items-center sm:items-start justify-start bg-[#E6E6E666] rounded-lg p-5 sm:p-10 gap-6 w-full" 
                  key={issue.id} 
                  layout // Ensures smooth reflow of elements
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  ><Image src={issue.image} height={40} width={40} alt={issue.title + " image"} className="size-6 md:size-10" />
                  <div className="flex flex-col gap-4 items-center sm:items-start">
                    <h3 className={`${inter.className} text-[18px]/[18px] sm:text-[20px]/[20px] font-medium text-center sm:text-start capitalize text-black`}>
                      {issue.title}
                    </h3>
                    <p className={`${inter.className} text-[#333333] font-normal text-[14px]/[21px] sm:text-[16px]/[24px] text-center sm:text-start`}>
                      {issue.paragpraph}
                    </p>
                  </div>
                </motion.div>
              ))
            }
            </AnimatePresence>
          </div>
        </SectionWrapper>
        <motion.div className="py-11 px-5 md:px-10 md:py-12 lg:py-19 lg:px-[115px] bg-[url(/images/testimonial-bg-mobile.svg)] md:bg-[url(/images/testimonial-bg-tablet.svg)] lg:bg-[url(/images/testimonial-bg-desktop.svg)] bg-cover bg-no-repeat bg-center rounded-lg md:rounded-2xl mb-[104px] md:mb-[168px] animate-grow"id="testimonials">
          <div className="flex flex-col gap-12 md:gap-16 items-start md:items-center max-w-[1360px] mx-auto">
            <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-start md:text-center text-white`}>
              Accurate taxes. <br className="md:hidden" />
              Stress-free crypto.
            </h2>
            <div className="flex flex-col gap-4 md:gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:max-w-[1130px]">
            {
              testimonials.map((testimony) => (
                <div className="p-5 md:p-10 gap-6 md:gap-10 flex flex-col items-start justify-between rounded-lg bg-[#333333] bg-[url(/images/quote.svg)] bg-[45%_120%] md:bg-[80%_130%] lg:bg-[80%_100%] bg-no-repeat bg-[length:200px_100px]" key={testimony.id}>
                  <h3 className={`text-white text-[18px]/[27px] md:text-[20px]/[30px] font-medium text-start ${inter.className}`}>
                    <blockquote>{`"${testimony.testimony}"`}</blockquote> 
                  </h3>
                  <div className="flex flex-row gap-2 items-center">
                    <Image src={testimony.image} height={44} width={44} alt={testimony.name + "review image"} className="rounded-full" />
                    <p className={`${inter.className} text-[18px]/[27px] font-normal text-white`}>
                      {testimony.name}
                    </p>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </motion.div>
        <SectionWrapper>
          <SectionTitle title="What Makes Us Different?" />
          <div className="flex flex-col gap-10 lg:gap-16 mx-auto">
            {
              features.map((feature) => (
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-16 md:flex-row md:even:flex-row-reverse items-center max-w-[500px] md:max-w-none mx-auto w-full" key={feature.id}>
                  <div className="flex items-center justify-center rounded-lg md:rounded-2xl bg-[#E6E6E666] h-60 md:h-100 w-full lg:w-3/5">
                    <div className="h-[90%] w-[90%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${feature.image})` }} ></div>
                  </div>
                  <div className="gap-4 flex flex-col w-full lg:w-2/5">
                    <h3 className={`${inter.className} text-[22px]/[22px] md:text-[29px]/[29px] font-medium text-start sm:text-start capitalize text-black`}>
                      {feature.title}
                    </h3>
                    <p className={`${inter.className} text-[#333333] font-normal text-[14px]/[21px] md:text-[16px]/[24px] text-start`}>
                    {feature.paragraph}
                  </p>
                  </div>
                </div>
              ))
            }
          </div>
        </SectionWrapper>
        <div className=" py-12 px-4 md:py-18 md:px-19 bg-[url(/images/form-bg-mobile.svg)] md:bg-[url(/images/form-bg-tablet.svg)] lg:bg-[url(/images/form-bg-desktop.svg)] rounded-lg md:rounded-2xl bg-center bg-cover bg-no-repeat mb-[104px] md:mb-[168px] animate-grow">
            <div className="flex flex-col lg:flex-row lg:items-center max-w-[1360px] mx-auto  gap-16">
              <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <h2 className={`text-[44px]/[44px] ${inter.className} font-medium text-white text-start md:text-center md:text-[73px]/[73px] lg:text-start`}>
                  Struggling with Blockchain Management?
                </h2>
                <p className={`${inter.className} text-[16px]/[24px] font-normal text-[#CCCCCC] text-start md:text-center md:text-[24px]/[36px] lg:text-start`}>
                  Fill this form and get your free solution now!
                </p>
              </div>
              <div className="h-100 p-2 bg-[#333333] rounded-lg lg:w-1/2">
                <iframe
                  src="https://app.bcmanagement.us/widget/form/EYUSmZfH6D3oOObAFsCW"
                  //style={{"width:100%;height:100%;border:none;border-radius:3px"}}
                  className="w-full h-full border-none"
                  id="inline-EYUSmZfH6D3oOObAFsCW" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="New BCM Form"
                  data-height="432"
                  data-layout-iframe-id="inline-EYUSmZfH6D3oOObAFsCW"
                  data-form-id="EYUSmZfH6D3oOObAFsCW"
                  title="New BCM Form"
                      >
                </iframe>
                <Script src="https://app.bcmanagement.us/js/form_embed.js"></Script>
              </div>
            </div>
        </div>
        <SectionWrapper id="pricing" >
          <SectionTitle title="Pricing Plans That Work For Everyone." />
            <PricingSection />
        </SectionWrapper>
        <div className="flex flex-col lg:flex-row rounded-lg md:rounded-2xl border border-[#333333]  bg-black mb-[64px] gap-10
        bg-[url('/images/consultation.svg'),_url('/orange-tint.svg'),_url('/images/grid.svg')] 
        h-200 md:h-300 lg:h-150 
        bg-no-repeat bg-[length:contain,auto,cover] bg-[position:bottom,top_center,center] 
        md:bg-no-repeat md:bg-[length:contain,auto,cover] md:bg-[position:bottom_center,center_-20%,center] 
        lg:bg-[length:auto,auto,cover] lg:bg-[position:bottom_right,-70%_center,center]  2xl:bg-[position:70%_100%,80%_center,center] animate-grow">
          <div className="flex flex-col justify-start gap-6 px-5 md:px-18 lg:px-0 lg:w-[60%] lg:ms-20 mt-20 lg:my-21 2xl:max-w-[1360px] 2xl:mx-auto ">
            <h2 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] text-white text-start font-medium 2xl:w-2/3`}>
              Still Got Questions? <br />
              Book a Free 15 minutes Consultation.
            </h2>
            <a href="https://app.bcmanagement.us/widget/groups/bcmcalendar" target="_blank" className="w-fit">
              <button className={`px-6 py-4 bg-[#F4844C] rounded-2xl flex flex-row gap-2 items-center text-white text-[16px]/[16px] capitalize font-medium ${inter.className} w-full sm:w-fit max-w-[300px] cursor-pointer`}>
                <Image src="./images/phone.svg" height={24} width={24} alt="" />
                book your free consultation
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
