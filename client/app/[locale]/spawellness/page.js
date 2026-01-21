import mainImg from "./images/spaBanner.webp"
import SpaInfoSection from './components/SpaInfoSection'
import SpaHeaderSection from './components/SpaHeaderSection'
import gallery1 from "./images/spa4.webp"
import gallery2 from "./images/spa3.webp"
import gallery3 from "./images/spa5.webp"
import MassageCarousel from './components/MassageCarousel'
import SpaTypesInfoSection from './components/SpaTypesInfoSection'
import SpaReverseInfo from './components/SpaReverseInfo'
import indoorImg from "./images/indoor.webp"
import hamam2 from "./images/spa9.webp"
import img1 from "./images/spa1.webp";
import img2 from "./images/spa2.webp";
import aromatic from "./images/aromatic.webp"
import oriental from "./images/oriental.webp"
import clasmassage from "./images/clasmassage.webp"
import facial from "./images/masagefaci.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import BannerDark from '../GeneralComponents/BannerDark'
import {useTranslations} from 'next-intl';

const galleryImages=[gallery1,gallery2,gallery3,img1,img2]

const massageImages=[aromatic, oriental, clasmassage, facial,]

const Page = () => {
  const t = useTranslations("Spa");
  const t2 = useTranslations('Spa.InfoSection');
  const t3 = useTranslations('Spa.GallerySection');
  const t4 = useTranslations('Spa.CarouselSection');
  const t5 = useTranslations('Spa.SpaTypes');
  
const massageHeaders=[t("title1"),t("title2"),t("title3"),t("title4")]

const sliderMassage = [
  {
    src: aromatic,
    title: t("title1"),

  },
  {
    src: oriental,
    title: t("title2"),

  },
  {
    src: clasmassage,
    title: t("title3"),

  },
  {
    src: facial,
    title: t("title4"),
   
  },
 
];

  const spaTextsInfo1=[t2("subtitle1"),t2("title1"),t2("text1")]
  const  spaTextsInfo2=[t2("subtitle2"),t2("title2"),t2("text2")]
  const spaTextsInfo3=[t2("subtitle3"),t2("title3"),t2("text3"),t2("list1"),t2("list2"),t2("list3"),t2("list4"),t2("list5"),t2("list6"),t2("list7")]

  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb] overflow-x-hidden'>
      <BannerDark img={mainImg} span={t("subtitle")} header={t("title")} text={t("text")}/>
      <SpaInfoSection img1={img1} img2={img2} texts={spaTextsInfo1} texts2={spaTextsInfo2} texts3={spaTextsInfo3}/> 
      <SpaHeaderSection span={t3("subtitle")} header={t3("title")} text={t3("text")} images={galleryImages}/>
      <MassageCarousel span={t4("subtitle")} header={t4("title")} text={t4("text")} headers={massageHeaders} images={sliderMassage}/>
      <div className='flex flex-col gap-[40px] lg:gap-[50px]'>
      <SpaTypesInfoSection isImageLeft={true} showLink={false} span={t5("subtitle1")} header={t5("title1")} text={t5("text1")} img={indoorImg}/>
      <SpaReverseInfo isImageLeft={false} showLink={false} span={t5("subtitle2")} header={t5("title2")} text={t5("text2")} img={hamam2}/>
      </div>
      <ContactSection2/>
    </div>
  )
}

export default Page
