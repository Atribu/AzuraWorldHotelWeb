import React from 'react'
import Image from 'next/image'

const MainBannerSection = ({img}) => {
  return (
    <div className='relative flex w-screen h-[68vh] overflow-hidden'>
      <Image
        src={img}
        alt="Entertainment banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  )
}

export default MainBannerSection
