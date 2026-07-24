"use client";
import React from "react";
import Banner from "../ourpolicies/components/Banner";
import mainImg2 from "../gallery/images/Banner.jpg";
import Image from "next/image";
import ExploreAlanya from "./components/ExploreAlanya";
import { useTranslations } from "next-intl";
import IconSection from "./components/IconSection";

import img1 from "@/public/sustainabilityReport/sayfa-01.webp"
import img2 from "@/public/sustainabilityReport/sayfa-02.webp"
import img3 from "@/public/sustainabilityReport/sayfa-03.webp"
import img4 from "@/public/sustainabilityReport/sayfa-04.webp"
import img5 from "@/public/sustainabilityReport/sayfa-05.webp"
import img6 from "@/public/sustainabilityReport/sayfa-06.webp"
import img7 from "@/public/sustainabilityReport/sayfa-07.webp"
import img8 from "@/public/sustainabilityReport/sayfa-08.webp"
import img9 from "@/public/sustainabilityReport/sayfa-09.webp"
import img10 from "@/public/sustainabilityReport/sayfa-10.webp"
import img11 from "@/public/sustainabilityReport/sayfa-11.webp"
import img12 from "@/public/sustainabilityReport/sayfa-12.webp"
import img13 from "@/public/sustainabilityReport/sayfa-13.webp"
import img14 from "@/public/sustainabilityReport/sayfa-14.webp"
import img15 from "@/public/sustainabilityReport/sayfa-15.webp"
import img16 from "@/public/sustainabilityReport/sayfa-16.webp"
import img17 from "@/public/sustainabilityReport/sayfa-17.webp"
import img18 from "@/public/sustainabilityReport/sayfa-18.webp"
import img19 from "@/public/sustainabilityReport/sayfa-19.webp"
import img20 from "@/public/sustainabilityReport/sayfa-20.webp"
import img21 from "@/public/sustainabilityReport/sayfa-21.webp"
import img22 from "@/public/sustainabilityReport/sayfa-22.webp"
import img23 from "@/public/sustainabilityReport/sayfa-23.webp"
import img24 from "@/public/sustainabilityReport/sayfa-24.webp"
import img25 from "@/public/sustainabilityReport/sayfa-25.webp"
import img26 from "@/public/sustainabilityReport/sayfa-26.webp"
import img27 from "@/public/sustainabilityReport/sayfa-27.webp"
import img28 from "@/public/sustainabilityReport/sayfa-28.webp"
import img29 from "@/public/sustainabilityReport/sayfa-29.webp"
import img30 from "@/public/sustainabilityReport/sayfa-30.webp"
import img31 from "@/public/sustainabilityReport/sayfa-31.webp"
import img32 from "@/public/sustainabilityReport/sayfa-32.webp"
import img33 from "@/public/sustainabilityReport/sayfa-33.webp"
import img34 from "@/public/sustainabilityReport/sayfa-34.webp"
import img35 from "@/public/sustainabilityReport/sayfa-35.webp"
import img36 from "@/public/sustainabilityReport/sayfa-36.webp"
import img37 from "@/public/sustainabilityReport/sayfa-37.webp"
import img38 from "@/public/sustainabilityReport/sayfa-38.webp"
import img39 from "@/public/sustainabilityReport/sayfa-39.webp"
import img40 from "@/public/sustainabilityReport/sayfa-40.webp"
import img41 from "@/public/sustainabilityReport/sayfa-41.webp"
import img42 from "@/public/sustainabilityReport/sayfa-42.webp"
import img43 from "@/public/sustainabilityReport/sayfa-43.webp"
import img44 from "@/public/sustainabilityReport/sayfa-44.webp"
import img45 from "@/public/sustainabilityReport/sayfa-45.webp"
import SustainabilityCarousel from "./components/SustainabilityCarousel";

const slides = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23,
  img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34,
  img35, img36
];

const Page = () => {
  const t = useTranslations("Footer");

  const handleClick = (e) => {
    const ok = window.confirm("Sunumu indirmek istediğinize emin misiniz?");
    if (!ok) {
      e.preventDefault(); // vazgeçerse açılmayı durdur
    }
    // onay verdiyse hiçbir şey yapma; link normal şekilde yeni sekmede açılır
  };

  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-start">
      <Banner img={mainImg2} span="" header={t("sustainability")} />
      <a
        href="/documents/WYNDHAMALANYAHotelSürdürülebilirTurizmRaporu2026.pdf"
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center py-[10px] px-[20px] mt-10 text-[20px] cursor-pointer border-b hover:text-lagoBlack2 hover:border-lagoBlack2 hover:font-medium whitespace-nowrap font-jost"
      >
        Sürdürülebilirlik Raporu 2025-2026
      </a>

 {/* Carousel  */}
  <div className="mt-8 mb-12 w-full">
        <SustainabilityCarousel slides={slides} autoplay={true} delay={5000} />
      </div>


      <ExploreAlanya />
      <IconSection/>
    </div>
  );
};

export default Page;
