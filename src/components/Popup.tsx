"use client"
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Popup = () => {
    const [showPopUp, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        <AnimatePresence>
            {showPopUp && (
                <motion.div
                    key="popup"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed h-screen w-screen bg-[#000000e1] top-0 left-0 z-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col md:flex-row w-[90%] max-w-[400px] h-fit lg:w-200 md:h-120 md:max-w-none bg-white relative rounded-sm"
                    >
                        <button className='absolute top-5 right-5 cursor-pointer' onClick={handleClose}>
                            <Image src="/images/close.svg" height={20} width={20} alt="Close" className='size-5' />
                        </button>
                        <div className="h-50 w-full md:w-2/5 md:h-full bg-center bg-cover bg-no-repeat bg-[url('/images/bcm-popup.jpg')]"></div>
                        <div className=" w-full md:w-3/5 flex flex-col items-start justify-center gap-4 md:gap-6 p-5 md:p-10">
                            <Image src="/logo.svg" height={30} width={60} alt="BCM Logo" className='mb-4' />
                            <h2 className={`text-black text-start ${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-medium capitalize`}>
                                Get Expert Advice at No Cost​
                            </h2>
                            <p className={`text-[#333333] text-start ${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] font-normal`}>
                                Schedule your FREE consultation with one of our specialists today and take the first step towards achieving your goals.
                            </p>
                            <button className='bg-[#F4844C] text-white text-[14px]/[21px] md:text-[16px]/[24px] font-medium hover:bg-[#f4844C] hover:-translate-y-2 transition duration-300 ease-in-out capitalize w-full py-4 px-6 rounded-none cursor-pointer'>
                                book now
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
