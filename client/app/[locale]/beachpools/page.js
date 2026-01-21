import React from 'react'
import Beach3 from './Components/Beach3'
import Beach4 from './Components/Beach4'
import Beach5 from './Components/Beach5'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import pool1 from "./Images/hoversız/beach4.jpg"
import pool2 from "./Images/hoversız/beach1.jpg"
import pool3 from "./Images/hoversız/beach5.jpg"
import pool4 from "./Images/hoversız/beach3.jpg"
import pool5 from "./Images/hoversız/beach2.jpg"
import hover1 from "./Images/hover/beach3.jpg"
import hover2 from "./Images/hover/beach2.jpg"
import hover3 from "./Images/hover/beach5.jpg"
import hover4 from "./Images/hover/beach4.jpg"
import hover5 from "./Images/hover/beach1.jpg"
import Form from '../GeneralComponents/Form'
import ClinaryInfoSection from '../restaurants/components/ClinaryInfoSection'
import BannerDark from '../GeneralComponents/BannerDark'
import mainimage from "./Images/banner.webp"
import blok1 from "../HomePage/Components/Images/blok2.jpg"
import blok2 from "../HomePage/Components/Images/blok1.jpg"
import {useTranslations} from 'next-intl';


const Page = () => {
  const t = useTranslations('BeachPools');
  const t2 = useTranslations('BeachPools.TwoImageSection');
  const t3 = useTranslations('BeachPools.PoolSection');

  const poolItems = [
    {
      src: pool1,
      hoverSrc: hover1,
      subtitle: t3("subtitle1"),
      title: t3("title1"),
      description: t3("text1"),
      icontext:t3("outdoor"),
      icontext2:t3("area1"),
      icontext3:t3("depth1")
    },
    {
      src: pool2,
      hoverSrc: hover2,
      subtitle: t3("subtitle2"),
      title: t3("title2"),
      description: t3("text2"),
      icontext:t3("outdoor"),
      icontext2:t3("area2"),
      icontext3:t3("depth2")
    },
    {
      src: pool3,
      hoverSrc: hover3,
      subtitle: t3("subtitle3"),
      title: t3("title3"),
      description: t3("text3"),
      icontext:t3("outdoor"),
      icontext2:t3("area3"),
      icontext3:t3("depth3")
    },
    {
      src: pool4,
      hoverSrc: hover4,
      subtitle: t3("subtitle4"),
      title: t3("title4"),
      description: t3("text4"),
      icontext:t3("outdoor"),
      icontext2:t3("area4"),
      icontext3:t3("depth4")
    },
    {
      src: pool5,
      hoverSrc: hover5,
      subtitle: t3("subtitle5"),
      title: t3("title5"),
      description: t3("text5"),
      icontext:t3("outdoor"),
      icontext2:t3("area5"),
      icontext3:t3("depth5")
    },
  
  ]
  
  const texts = [
    t2("text"),
    t2("span"),
    t2("list1"),
    t2("list2"),
    t2("list3")
  ];

  return (
    <div className='flex flex-col items-center justify-center bg-[#fbfbfb] gap-[60px] md:gap-[80px] lg:gap-[100px] overflow-hidden'>
    <BannerDark img={mainimage} span={t("subtitle")} header={t("title")} text={t("text")}/>
    <ClinaryInfoSection
            img1={blok1}
            img2={blok2}
            span={t2("subtitle")}
            header={t2("title")}
            texts={texts}
          />
   
   
      <Beach3 />
      <Beach4 />
   
      <Beach5 showLink={false} span={t3("subtitle")} header={t3("title")} text={t3("text")} poolItems={poolItems}/>
      <ContactSection2 />
      <Form/>
   
    </div>
  )
}

export default Page