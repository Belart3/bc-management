import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <header className="bg-[#e6e6e620] h-fit w-full rounded-lg pt-[122px] md:pt-[172px] bg-[url(/header-orange-tint.svg)] bg-bottom bg-no-repeat bg-contain  relative backdrop-blur-[150px] mb-[200px]">
        <div className="flex flex-col gap-6  mb-[50px] mx-3 md:mx-0 max-w-[1130px] lg:mx-auto">
          <div className="flex flex-col gap-4 ">
            <h1 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] font-medium text-black text-center capitalize md:px-10`}>
              Simplify Your Crypto Taxes and Maximize Your Profits.
            </h1>
            <p className={`text-[16px]/24px md:text-[24px]/[36px] mx-[18px] ${inter.className} text-center font-normal text-[#333333] max-w-[550px] mx-auto`}>
              Stop stressing over confusing DeFi and crypto transactions. Let us handle the calculations so you can focus on growing your portfolio.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className={`capitalize text-white text-[16px]/[16px] ${inter.className} rounded-2xl bg-[#F4844C] px-6 py-4 w-full sm:w-fit`}>
              get started
            </button>
          </div>
        </div>
        <div className="flex  flex-row items-center justify-center space-x-2">
          <Image src="/orange-arrow.svg" height={12} width={30} alt="" className="md:w-[57px]  md:h-[25px]" />
          <p className={`text-[#DD4A00] text-[8px]/[8px] md:text-[16px]/[16px] font-bold ${inter.className} rotate-12`}>
            Watch Video
          </p>
        </div>
        <div className="flex bg-[#00000010] rounded-xl md:rounded-3xl border-[0.5px] border-[#666666] h-[300px] md:h-[400px] lg:h-[500px] p-2 md:p-6 relative  -bottom-[100px] lg:-bottom-[133px] w-[95%] max-w-[650px] lg:w-[1130px] lg:max-w-[1130px] left-[50%] -translate-x-[50%] backdrop-blur-[15px]  md:backdrop-blur-[30px] ">
          <div className="h-full w-full bg-[#00000010] rounded-lg md:rounded-2xl border-[0.5px] border-[#666666] p-1 md:p-2 backdrop-blur-[10px] md:backdrop-blur-[20px]">
            <div className="h-full w-full bg-black rounded-sm md:rounded-lg">
              <video preload="none" className="h-full w-full rounded-sm md:rounded-lg" >
                <source src="/videos/Defi crypto tax services and Defi blockchain tax management.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
