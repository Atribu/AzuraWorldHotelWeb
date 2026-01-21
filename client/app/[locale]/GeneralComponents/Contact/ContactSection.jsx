"use client"
import React,{ useEffect, useRef } from "react";
import Image from 'next/image'
import imgBackground from "./images/darkgallerybg.png"
import LeafSvg from '../Header/Icons/LeafSvg'
import minigallery from "./images/Azuraworldgallery.webp"
import Link from 'next/link'
import { PiInstagramLogoLight,PiFacebookLogoLight, PiYoutubeLogoLight} from "react-icons/pi";
import {useTranslations} from 'next-intl';

const ContactSection = () => {
  const t = useTranslations('ContactPage');

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 2.5; // Daha yavaş kayma için 1px
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += scrollSpeed;

        // Eğer en sona geldiyse, biraz bekleyip başa dön
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          setTimeout(() => {
            scrollContainer.scrollTop = 0; // Baştan başlat (ani sıçrama yapmadan)
          }, 500); // 0.5 saniye bekleyip baştan başlat
        }
      }, 40); // Daha smooth kayma için 30ms
    };

    startScrolling();

    return () => clearInterval(scrollInterval); // Component unmount olursa temizle
  }, []);

  return (
    <div className='flex w-screen h-screen md:h-[497px] lg:h-[750px] 2xl:h-[850px] items-center md:justify-start bg-cover bg-center relative  max-w-[1920px] overflow-hidden justify-center' style={{ backgroundImage: `url(${imgBackground.src})` }}>
      <LeafSvg className="absolute top-6 -left-24 z-[1]" width={498} height={652}/>
      <div className='flex flex-col md:flex-row w-[95%]  md:w-[88%] lg:w-[80%] items-center justify-start bg-white h-[90%] lg:h-[88%] max-w-[1440px] gap-[20px]'>

        <div className='flex h-[25%] md:h-auto w-[90%] md:w-[45%] lg:w-[39%] font-jost text-black items-center md:items-start justify-center z-20'>
           <div className='flex flex-col md:w-[79%] items-center text-center md:text-start md:items-start justify-center gap-[15px] md:gap-[23.19px] lg:gap-[30px]'>
           <span className=' text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px] mt-[14%] md:mt-0'> {t("contactForMore")}</span>
            <h2 className='font-marcellus font-normal text-[28px] md:text-[28px] lg:text-[28px] xl:text-[36px] 2xl:text-[44px] leading-[150%] lg:leading-[57.6px] capsizedText3 lg:capsizedText2'>@AzuraWorld</h2>
           
            <div className="font-jost text-[14px] md:text-[16px] leading-[24px] underline-offset-2 flex flex-col gap-2 ">
          {/* Mobil görünüm (lg'den küçük) */}
          <span className="capsizedText4 lg:hidden">
          Türkler Mah. Kargı Çayı Cad. No:10 Alanya / Turkey
          </span>
          <span className="capsizedText4 lg:hidden">
            {t("phoneColon")} <Link href="tel:+902425171234" className="underline z-[99] ">+90 242 517 12 34</Link>
          </span>
          <span className="capsizedText4 lg:hidden">
          {t("callCenter")}: <Link href="tel:+902422771143" className="underline z-[99] ">+90 242 277 11 43</Link>
          </span>
          <span className="capsizedText4 lg:hidden">
          {t("emailAddress")}: <Link  href="mailto:info@azuraworld.com" className="underline z-[99] ">info@azuraworld.com</Link>
          </span>

          {/* Desktop görünüm (lg ve üstü) */}
          <span className="hidden lg:block">
          Türkler Mah. Kargı Çayı Cad. No:10 Alanya / Turkey
          </span>
          <span className="hidden lg:block">
          {t("phoneColon")} <Link href="tel:+902425171234" className="underline z-[99] ">+90 242 517 12 34</Link>
          </span>
          <span className="hidden lg:block">
          {t("callCenter")}: <Link href="tel:+902422771143" className="underline z-[99] ">+90 242 277 11 43</Link>
          </span>
          <span className="hidden lg:block">
          {t("emailAddress")}: <Link  href="mailto:info@azuraworld.com" className="underline z-20 cursor-pointer">info@azuraworld.com</Link>
          </span>
        </div>
            
            <div className='flex w-full items-center justify-center md:justify-start gap-[20px] '>
                <div className='flex items-center justify-center gap-[18px]'>
                <Link className="flex z-20"
              href="https://www.instagram.com/azuradeluxeresort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              
              <PiInstagramLogoLight size={28} />
            </Link>
            
            <Link
            className="flex z-20"
              href="https://www.facebook.com/AzuraDeluxeResort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <PiFacebookLogoLight size={28} />
            </Link>
            <Link
            className="flex z-20"
              href="https://www.youtube.com/channel/UC3Z23WuWOhmpFnbw9fLI1-g"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <PiYoutubeLogoLight size={28} />
            </Link>
                </div>
                <div className='flex bg-black h-[20px] w-[1px]'></div>
                <Link href="https://azuraworld.orsmod.com/"  target="_blank"
              rel="norefferer nofollower" className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[16px] font-normal hidden lg:flex leading-[30px] uppercase z-20">{t("bookNow")}</Link>
                <Link href="https://azuraworld.orsmod.com/"  target="_blank"
              rel="norefferer nofollower" className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[14px] font-normal md:leading-[19.88px] flex lg:hidden uppercase z-20">{t("bookNow")}</Link>
            </div>
           </div>
        </div>

        <div className='flex w-[90%] md:w-[55%] lg:w-[60%] h-[70%] md:h-[95%] items-end'>
        <div style={{ scrollBehavior: "smooth" }} ref={scrollRef} className="w-full h-[96%] md:h-full min-h-[322px] max-w-[99%] overflow-hidden custom-scroll scroll-smooth ">
      <div className="flex flex-col">
          {[...Array(8)].flatMap((_, loopIndex) =>
            [minigallery].map((img, index) => (
              <Image
                key={`${loopIndex}-${index}`}
                src={img}
                height={img.height}
                width={img.width}
                alt="Minigallery"
                loading="lazy"
                className="xl:w-[100%] h-auto overflow-hidden"
              />
            ))
          )}
        </div>
       
      </div>
          {/* <div className='flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto'>
          <div className="columns-3 gap-3 px-3 mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer ">
                {images.map((item,index)=>{
                    return(
                      <div className="mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer" key={index}>
                        <Image src={item.imgSrc} alt="contact" className='w-[100%] '/>
                    </div>
                    )
                })}
            </div>
          </div> */}
        
          </div>       

      </div>
    </div>
  )
}

export default ContactSection
