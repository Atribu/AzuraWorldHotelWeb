import React from 'react'
import MainBannerSection from './components/MainBannerSection'
import mainImg from "./images/Genel21.webp"
import ActivitiesSection from './components/ActivitiesSection'
import EntertainmentTypesSection from './components/EntertainmentTypesSection'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb] overflow-x-hidden'>
      <MainBannerSection img={mainImg}/>
      <ActivitiesSection/>
      <EntertainmentTypesSection/>
      <ContactSection2/>
    </div>
  )
}

export default Page
