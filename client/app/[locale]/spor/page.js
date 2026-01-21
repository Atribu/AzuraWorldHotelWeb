import React from 'react'
import mainImg from "./images/fitnessBanner.jpg"
import SpaInfoSection from '../spawellness/components/SpaInfoSection'
import infoImg from "./images/group_fit.jpg"
import infoImg2 from "./images/fitnessBanner.jpg"
import SpaHeaderSection from '../spawellness/components/SpaHeaderSection'
import gallery1 from "./images/table_ten.jpg"
import gallery2 from "./images/gallery_orta.jpg"
import gallery3 from "./images/gallery_sag.jpg"

import SpaTypesInfoSection from '../spawellness/components/SpaTypesInfoSection'
import aqua from "./images/aqua.jpg"
import tableten from "./images/table_ten.jpg"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import BannerDark from '../GeneralComponents/BannerDark'
import SpaReverseInfo from "../spawellness/components/SpaReverseInfo"
import {useTranslations} from 'next-intl';

const galleryImages =[gallery1,gallery2,gallery3]

const Page = () => {
  const t = useTranslations("Sport");
  const t2 = useTranslations("Sport.InfoSection");
  const t3 = useTranslations("Sport.GallerySection");
  const t4 = useTranslations("Sport.SpaTypes");

  const texts=[t2("subtitle1"),t2("title1"),t2("text1")]
  const  texts2=[t2("subtitle2"),t2("title2"),t2("text2")]
  const texts3=[t2("subtitle3"),t2("title3"),t2("text3"),t2("list1"),t2("list2"),t2("list3"),t2("list4")]

  return (
    <div className='flex flex-col items-center justify-center gap-[100px] bg-[#fbfbfb] overflow-x-hidden'>
      <BannerDark img={mainImg} span={t("subtitle")} header={t("title")} text={t("text")}/>
      <SpaInfoSection img1={infoImg} img2={infoImg2} texts={texts} texts2={texts2} texts3={texts3}/>
      <SpaHeaderSection span={t3("subtitle")} header={t3("title")} text={t3("text")} images={galleryImages}/>
      <SpaTypesInfoSection isImageLeft={true} showLink={false} span={t4("subtitle2")} header={t4("title2")} text={t4("text2")} img={aqua}/>
      <SpaReverseInfo isImageLeft={false} showLink={false} sspan={t4("subtitle1")} header={t4("title1")} text={t4("text1")} img={tableten}/>
      <ContactSection2/>
    </div>
  )
}

export default Page
