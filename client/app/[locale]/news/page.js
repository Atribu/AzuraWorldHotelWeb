import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import imgBanner from "../about/images/gal_son.jpg"


const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[100px] bg-[#fbfbfb]'>
       <MainBanner2 img={imgBanner} header="News" span=""/>
    </div>
  )
}

export default Page
