import React from 'react'
import imageMain from "./images/kids4.webp"
import KidsBamboo from './components/KidsBamboo'
import KidsIconsSection from './components/KidsIconsSection'
import KidsclubCarousel from './components/KidsclubCarousel'
import ContactSection from '../GeneralComponents/Contact/ContactSection'
import kids1 from "./images/kids7.jpg"
import kids2 from "./images/child_pool.jpg"
import kids3 from "./images/2149046677.jpg"
import CuisinesCarousel from '../restaurants/components/CuisinesCarousel'
import KidsRestaurantCarousel from './components/KidsRestaurantCarousel'
import KidsMomentCarousel from './components/KidsMomentCarousel'
import img1 from "./images/kids3.webp"
import img2 from "./images/kids4.webp"
import img3 from "./images/kids5.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import RestaurantMainBanner from '../restaurants/components/RestaurantMainBanner'
import BannerDark from '../GeneralComponents/BannerDark'
import ClinaryReverseInfo from '../restaurants/components/ClinaryReverseInfo'
import {useTranslations} from 'next-intl';

const Page = () => {
  const t = useTranslations('KidsClub');
  const t2 = useTranslations('KidsClub.TwoImageSection');
  const t3 = useTranslations('KidsClub.OtherOptions');

  const momentImages=[img1,img2,img3]

const kids = [
  {
    id: 1,
    img: kids1,
    title: t3("title1"),
    description: t3("subtitle1"),
    text:t3("text1"),
    link:"/"
  },
  {
    id: 2,
    img: kids2,
    title: t3("title2"),
    description: t3("subtitle2"),
    text:t3("text2"),
     link:"/"
  },
  {
    id: 3,
    img: kids3,
    title: t3("title3"),
    description: t3("subtitle3"),
    text:t3("text3"),
     link:"/"
  }
];


  return (
    <div className='overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <BannerDark img={imageMain} span={t("subtitle")} header={t("title")} text={t("text")}/>
      <ClinaryReverseInfo img1={img1} img2={img2}   span={t2("subtitle")}
            header={t2("title")}
             text1= {t2("text")} text2=""/>
      <KidsIconsSection/>
      <KidsclubCarousel/>
      <CuisinesCarousel span={t3("subtitle")} header={t3("title")} text={t3("text")} cuisines={kids}/>
      <KidsMomentCarousel showheader={true} images={momentImages} header={t("galleryTitle")}/>
      <ContactSection2/>
    </div>
  )
}

export default Page
