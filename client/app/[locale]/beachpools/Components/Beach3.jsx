import React from 'react'
import Slider from "../../HomePage/Components/Slider/Slider2"
import Slide1 from '../Images/Slide/Group427319247.jpg'
import Slide2 from '../Images/Slide/Group427319248.jpg'
import Slide3 from '../Images/Slide/Group427319249.jpg'
import Slide4 from '../Images/Slide/Beach2.webp'
import {useTranslations} from 'next-intl';

const Beach3 = () => {
  const t = useTranslations('BeachPools.BeachCarousel');

    const slides = [
      { src: Slide2, title:t("title1"), span:t("span1") },
        { src: Slide1, title:t("title2"), span:t("span2") },
      
        { src: Slide3, title:t("title3"), span:t("span3") },
        { src: Slide4, title:t("title4"), span:t("span4")},
      ]
  return (
    <div className='flex flex-col w-full gap-[30px] lg:gap-[50px] items-center justify-center'>
        <div className='flex flex-col gap-[20px] md:gap-[25px] lg:gap-[35px] w-[87.79%] md:w-[91.4%] lg:w-[76.8%] ml-[6.1%] md:ml-0 items-start justify-center text-start'>
          <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>{t("subtitle")}</p>
          <h3 className='font-marcellus text-[28px] md:text-[32px] lg:text-[48px] font-normal leading-[120%] lg:leading-[57.6px] capsizedText2'>{t("title")}</h3>
          <p className='font-jost text-[14px] lg:text-[16px] font-normal leading-normal lg:leading-[24px] capsizedText4 w-full md:max-w-[85%] lg:max-w-[727px]'>{t("text")}</p>
        </div>
        <Slider slides={slides} />
    </div>
  )
}

export default Beach3