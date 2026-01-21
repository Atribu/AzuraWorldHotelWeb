import React from 'react'
import TextSection from './components/TextSection'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import imgBanner from "../about/images/gal_son.jpg"

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden'>
      <MainBanner2 img={imgBanner} header="COVID-19" span=""/>
      <TextSection/>
    </div>
  )
}

export default Page
