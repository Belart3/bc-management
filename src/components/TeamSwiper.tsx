
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';
import team from '@/data/team.json';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function TeamSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        freeMode={true}
        modules={[FreeMode]}
        grabCursor={true}
        className="mySwiper h-85 md:h-90"
      >
        {
            team.map((item,index) => (
                <SwiperSlide className="p-3 rounded-2xl w-full md:w-95 max-w-[350px] md:max-w-none bg-top bg-cover bg-no-repeat relative select-none" style={{backgroundImage: `url(${item.image})`}} key={index}>
                    <div className="flex flex-col gap-3 items-center justify-center bg-[#000000]/50 w-[calc(100%-24px)] bottom-[12px] rounded-2xl backdrop-blur-[10px] p-2 absolute">
                        <h3 className={`${inter.className} capitalize text-[22px]/[22px] md:text-[30px]/[30px] font-medium text-white text-center`}>{item.name}</h3>
                        <p className={`${inter.className} uppercase text-[18px]/[18px] md:text-[20px]/[20px] font-medium text-[#CCCCCC] text-center`}>{item.position}</p>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
