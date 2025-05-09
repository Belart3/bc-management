import React from 'react'
import Image from 'next/image'

const PlusIcon = () => {
  return (
    <div>
        <Image src={'/images/plus-icon.svg'} alt={''} className='size-14' height={56} width={56} />
    </div>
  )
}

export default PlusIcon