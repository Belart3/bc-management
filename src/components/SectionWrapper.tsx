import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
}

const SectionWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-12 md:gap-y-16 w-full mb-14 md:mb-42 max-w-[1130px] mx-auto'>
        {props.children}
    </div>
  )
}

export default SectionWrapper; 