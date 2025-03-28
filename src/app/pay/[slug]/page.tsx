import ClickCopy from '@/components/ClickCopy';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import wallets from '@/data/wallets.json'
import { notFound } from 'next/navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateStaticParams() {
    return wallets.map((wallet) => ({
        slug: wallet.id.toString(),
    }))
}

export default async function ProductPage({params}: { params: Promise<{ slug: string }> }){
    const {slug} = await params
    const wallet = wallets.find(p => p.id.toString() === slug)
    if (!wallet) {
      return notFound()
    }

    return (
        <div className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col md:max-w-[600px] lg:max-w-[1130px] mx-auto mb-16 lg:mb-26 gap-12 md:gap-16'>
            <div className="">
                <h1 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] font-medium text-center text-black`}>
                    Step by Step Guide for Crypto Payments Via
                    <span className="uppercase" > {wallet.id}</span>.
                </h1>
            </div>
            <div className="flex flex-col gap-6 md:gap-10 w-full">
                <p className={`${inter.className} text-black text-[18px]/[18px] md:text-[20px]/[20px] text-start font-medium`}>
                    To complete your payment using <span className="uppercase" > {wallet.id}</span>, please adhere to the detailed procedure outlined below to guarantee successful activation of your account:
                </p>
                <ul className='flex flex-col gap-6 items-start w-full'>
                    <li className=' list-decimal text-wrap'>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <p className={`${inter.className} text-wrap text-[16px]/[24px] md:text-[18px]/[27px] font-normal text-[#333333]`}>
                                    Send the cost of your selected package
                                    to this wallet address
                                </p>
                                <div className="flex flex-row items-center gap-0.5 w-full max-w-[300px] md:max-w-none flex-wrap">
                                    <p className={`${inter.className} text-wrap text-[16px]/[24px] md:text-[18px]/[27px] font-bold text-[#333333]`}>
                                        {wallet.address}
                                    </p>
                                    <ClickCopy copyText={wallet.address} />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row md:items-center gap-2 items-start'>
                                <Image src={wallet.qrCode} height={160} width={160} alt="scan qr code" />
                                <div className="flex flex-row gap-2 items-start">
                                    <Image src='/images/information-circle.svg' height={24} width={24} alt='more info' /> 
                                    <p className={`${inter.className} text-[#999999] text-[14px]/[21px] md:text-[16px]/[24px] font-normal text-start`}>
                                        Scan the QR code to make payments or click the copy icon next to the wallet address above to copy and paste the correct wallet address.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className={`${inter.className} list-decimal text-wrap text-[16px]/[24px] md:text-[18px]/[27px] font-normal text-[#333333]`}>
                        Fill the <Link href='/'><span className='font-bold text-[#F4844C]'>Payment Form</span></Link> or send an email to us <Link href='mailto:support@bcmanagement.us'><span className='font-bold text-[#F4844C]'>support@bcmanagement.us</span></Link> containing your payment’s transaction hash and your name in the subject of the email.
                    </li>

                    <li className={`${inter.className} list-decimal text-wrap text-[16px]/[24px] md:text-[18px]/[27px] font-normal text-[#333333]`}>
                        Your payment will be confirmed within 24 hours, after which you would receive an email with the next steps to take.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
                <p className={`${inter.className} text-[18px]/[18px] md:text-[20px]/[20px] font-medium text-[#999999]`}>
                    If you get stuck at any point please do contact us through any of the mediums below
                </p>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex flex-col gap-3 items-start">
                        <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
                            Text us or call us
                        </p>
                        <Link href={'tel:+1-220-226-8720'}>
                            <p className={`text-[#F4844C] text-start ${inter.className} text-[18px]/[27px] font-normal capitalize flex items-center justify-start gap-2`}>
                                <span>
                                <Image src="/images/phone-orange.svg" height={24} width={24} alt='' />
                                </span>
                                +1-220-226-8720
                            </p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3 items-start">
                        <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
                          Send us an email
                        </p>
                        <Link href={'mailto:support@bcmanagement.us'}>
                            <p className={`text-[#F4844C] text-start ${inter.className} text-[18px]/[27px] font-normal capitalize flex items-center justify-start gap-2`}>
                            <span>
                            <Image src="/images/mail-orange.svg" height={24} width={24} alt='' />
                            </span>
                            support@bcmanagement.us
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  