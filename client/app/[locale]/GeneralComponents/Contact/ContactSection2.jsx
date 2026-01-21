"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import minigallery from "./images/Azuraworldgallery.webp";
import { Link } from '@/i18n/navigation';
import {
  PiInstagramLogoLight,
  PiMetaLogoLight,
  PiFacebookLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";
import {useTranslations} from 'next-intl';

const ContactDetails = () => {
  const t = useTranslations('ContactPage');

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[35%] lg:w-[40%] md:pl-0">
      <div className="flex flex-col w-full max-w-[350px] items-center md:items-start justify-center gap-[20px] md:gap-[30px]">
        <span className="font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
          {t("contactForMore")}
        </span>
        <h2 className="font-marcellus font-normal text-[28px] md:text-[28px] lg:text-[28px] xl:text-[36px] 2xl:text-[44px] leading-[150%] lg:leading-[57.6px] capsizedText3 lg:capsizedText2">
          @AzuraWorld
        </h2>
        <p className="font-jost text-[14px] md:text-[16px] leading-[24px] underline-offset-2 flex flex-col gap-2 ">
          {/* Mobil görünüm (lg'den küçük) */}
          <span className="capsizedText4 lg:hidden">
          Türkle Mah. Kargı Çayı Cad. No:10 Alanya / Turkey
          </span>
          <span className="capsizedText4 lg:hidden">
          {t("phoneColon")}{" "}
            <Link href="tel:+902425171234" className="underline">
            +90 242 517 12 34
            </Link>
          </span>
          <span className="capsizedText4 lg:hidden">
          {t("callCenter")}:{" "}
            <Link href="tel:+902422771143" className="underline">
            +90 242 277 11 43
            </Link>
          </span>
          <span className="capsizedText4 lg:hidden">
          {t("emailAddress")}{" "}
            <Link href="mailto:info@azuraworld.com" className="underline">
              info@azuraworld.com
            </Link>
          </span>

          {/* Desktop görünüm (lg ve üstü) */}
          <span className="hidden lg:block">
            Türkle Mah. Kargı Çayı Cad. No:10 Alanya / Turkey
          </span>
          <span className="hidden lg:block">
          {t("phoneColon")}{" "}
            <Link href="" className="underline">
            +90 242 517 12 34
            </Link>
          </span>
          <span className="hidden lg:block">
          {t("callCenter")}:{" "}
            <Link href="" className="underline">
            +90 242 277 11 43
            </Link>
          </span>
          <span className="hidden lg:block">
            {t("emailAddress")}{" "}
            <Link href="" className="underline">
              info@azuraworld.com
            </Link>
          </span>
        </p>
        <div className="flex gap-[20px] whitespace-nowrap">
          <div className="flex items-center justify-center gap-[18px]">
            <Link
              href="https://www.instagram.com/azuradeluxeresort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <PiInstagramLogoLight size={28} />
            </Link>
            {/* <PiMetaLogoLight size={30} /> */}
            <Link
              href="https://www.facebook.com/AzuraDeluxeResort/"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <PiFacebookLogoLight size={28} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC3Z23WuWOhmpFnbw9fLI1-g"
              target="_blank"
              rel="norefferer nofollower"
            >
              {" "}
              <PiYoutubeLogoLight size={28} />
            </Link>
          </div>
          <div className="flex bg-black h-[20px] w-[1px] self-center"></div>
          <Link href="https://azuraworld.orsmod.com/"  target="_blank"
              rel="norefferer nofollower" className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[14px] lg:text-[16px] font-normal leading-[30px] uppercase">
          {t("bookNow")}
          </Link>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 2.5; // Daha yavaş kayma için 1px
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += scrollSpeed;
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          setTimeout(() => {
            scrollContainer.scrollTop = 0;
          }, 500);
        }
      }, 40);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="flex justify-center md:justify-end items-center w-[90%] md:w-[55%] lg:w-[60%] h-full">
      <div
        style={{ scrollBehavior: "smooth" }}
        ref={scrollRef}
        className="w-full h-[30vh] sm:h-[40vh] justify-center items-center md:h-[322px] max-w-[789px] overflow-hidden custom-scroll scroll-smooth md:mr-[4%]"
      >
        <div className="flex flex-col">
          {[...Array(100)].flatMap((_, loopIndex) =>
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
    </div>
  );
};

const ContactSection2 = () => {
  return (
    <div className="flex w-screen max-w-[1440px] mb-[100px] justify-start">
      {/* Desktop görünüm: İki bölüm arasında ekstra boşluk */}
      <div className="hidden md:flex justify-center items-center gap-8 border-[1px] border-lagoBlack xl:min-w-[90vw] 2xl:min-w-[1401px]  h-[34vh] min-h-[422px]">
        <ContactDetails />
        <GallerySection />
      </div>
      {/* Mobil görünüm: Arkaplan resmi kaldırıldı */}
      <div className="flex flex-col w-full md:hidden justify-center items-center h-[65vh] bg-[#fbfbfb]">
        <div className="flex flex-col w-[90%] sm:w-[85%] bg-[#fbfbfb] gap-[33px] min-h-content h-[55vh] py-[30px] items-center justify-center text-center">
          <ContactDetails />
          <GallerySection />
        </div>
      </div>
    </div>
  );
};

export default ContactSection2;
