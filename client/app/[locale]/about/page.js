import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import mainImg from "./images/banner.jpg"
import exactImg from "./images/PANORAMIC.jpg"
import SpaReverseInfo from '../spawellness/components/SpaReverseInfo'
import MissionVisionSection from './components/MissionVisionSection'
import EmblaCarousel from "../HomePage/Components/Slider/Slider1"
import KidsMomentCarousel from '../kidsclub/components/KidsMomentCarousel'
import img1 from "./images/Night1.webp"
import img2 from "./images/Night9.webp"
import img3 from "./images/Night13.webp"
import img4 from "./images/Night22.webp"
import leftImg from "./images/Genel8.webp"
import rightImg from "./images/2.jpg"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import {useTranslations} from 'next-intl';

const images =[img2,img3,img4,img1]

const Page = () => {
  const t = useTranslations("About");
  const t2 = useTranslations("About.InfoSection");
  const t3 = useTranslations("About.MissinonVision");

  const texts=[t3("subtitle"),t3("title"),t3("text")]
const texts2=[t3("clubsubtitle1"),t3("clubtitle1"),t3("clubtext1")]
const texts3=[t3("clubsubtitle2"),t3("clubtitle2"),t3("clubtext2")]

  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb] overflow-x-hidden'>
      <MainBanner2 span={t("subtitle")} header={t("title")} img={mainImg}/>
      <SpaReverseInfo isImageLeft={false} span={t2("subtitle")} header={t2("title")} text={t2("text")} link="/" showLink={true} img={exactImg}/>
      <KidsMomentCarousel showheader={false} header=""  images={images}/>
      <MissionVisionSection texts={texts} texts2={texts2} texts3={texts3} leftImg={leftImg} rightImg={rightImg} showLink={false}/>
      <EmblaCarousel options={{ loop: true }}/>
      <ContactSection2/>
    </div>
  )
}

export default Page
