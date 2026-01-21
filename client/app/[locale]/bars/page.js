import imgBanner from "./images/Banner.jpg"
import ClinaryInfoSection from '../restaurants/components/ClinaryInfoSection'
import cafebar1 from "./images/blok2.png"
import cafebar2 from "./images/blok22.png"
import DiscoverBackground from '../restaurants/components/DiscoverBackground'
import backgroundImg from "../restaurants/orchestrarestaurant/images/orchestra3.jpg"
import BackgroundSection from '../rooms/subroomComponent/components/BackgroundSection'
import backgroundImg2 from "./images/POOL.png"
import OtherOptions4 from './components/OtherOptions4'
import piano from "./images/PIANOBAR.png"
import chacha from "./images/Chacha.png"
import pier from "./images/Pierbar.png"
import discobar from "./images/discobar.png"
import {useTranslations} from 'next-intl';
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import BannerDark from "../GeneralComponents/BannerDark"

const Page = () => {
  const t = useTranslations('Bars');
  const t2 = useTranslations('Bars.TwoImageSection');
  const t3 = useTranslations('Bars.BackgroundSection');
  const t4 = useTranslations('Bars.Carousel');
  const t5 = useTranslations('Bars.BackgroundSection2');

  const clinaryTexts=[t2("text")]
const backgroundTexts=[t3("text")]
const backgroundTexts2=["For breakfast, lunch, and dinner, we have prepared an endless open buffet where you may immerse in both authentic Turkish cuisine sensations and seasonal delicacies."]

const otherOptions = [
  {
      id: 1,
      img: piano,
      title: t4("title1"),
      description:  t4("subtitle1"),
      text: t4("text1"),
      link:"/bars/lobby-piano-bar"
    },
  {
      id: 2,
      img: chacha,
      title:  t4("title2"),
      description:  t4("subtitle2"),
      text: t4("text2"),
      link:"/bars/chacha-pool-bar"
    },
    {
      id: 3,
      img: pier,
      title:  t4("title3"),
      description:  t4("subtitle3"),
       text: t4("text3"),
       link:"/bars/pier-bar"
    },
    {
      id: 4,
      img: discobar,
      title: t4("title4"),
      description:  t4("subtitle4"),
       text: t4("text4"),
       link:"/bars/pier-bar"
    }
];

  
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb] overflow-x-hidden'>
      <BannerDark  img={imgBanner} span={t("subtitle")} header={t("title")}  text={t("text")} />
      <ClinaryInfoSection img1={cafebar1} img2={cafebar2} span={t2("subtitle")} header={t2("title")} texts={clinaryTexts}/>
      <BackgroundSection span={t3("subtitle")} header={t3("title")} texts={backgroundTexts} link="/" img={backgroundImg2}/>
      <OtherOptions4 span={t4("subtitle")} header={t4("title")} text={t4("text")} images={otherOptions}/>
      <DiscoverBackground span={t5("subtitle")} header={t5("title")} text={t5("text")} link="/bars" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default Page
