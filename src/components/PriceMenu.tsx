import { Inter } from "next/font/google";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Example() {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize font-medium text-[16px]/[16px] text-[#F4844C] border border-[#F4844C] w-full ${inter.className} cursor-pointer`}>
            <Image src="./images/pay-with-crypto.svg" height={24} width={24} alt="" />
            pay with crypto
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-6 text-[#F4844C]" />
          </MenuButton>
        </div>
  
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in w-full"
        >
          <div className="py-1">
            <MenuItem>
              <Link
                href="/pay/eth"
                className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden uppercase ${inter.className}`}
              >
                eth
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/pay/solana"
                className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden uppercase ${inter.className}`}
              >
                solana
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/pay/usdt"
                className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden uppercase ${inter.className}`}
              >
                usdt
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/pay/usdc"
                className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden uppercase ${inter.className}`}
              >
                usdc
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/pay/bitcoin"
                className={`block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden uppercase ${inter.className}`}
              >
                bitcoin
              </Link>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    )
  }