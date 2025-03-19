import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
}

const pageWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div className='mx-10 mt-5'>
        {props.children}
    </div>
  )
}

export default pageWrapper