import React from 'react'
import TextSection from './components/TextSection'
import imgBanner from "../about/images/Gal_sag.jpg"
import MainBanner2 from '../GeneralComponents/MainBanner2'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden'>
        <MainBanner2 img={imgBanner} header="KVKK" text="" span=""/>
      <TextSection/>
    </div>
  )
}

export default Page
