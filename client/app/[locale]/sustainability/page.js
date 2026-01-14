"use client";
import React from "react";
import Banner from "../ourpolicies/components/Banner";
import mainImg2 from "../gallery/images/Banner.jpg";
import Image from "next/image";
import ExploreAlanya from "./components/ExploreAlanya";
import { useTranslations } from "next-intl";
import IconSection from "./components/IconSection";

import img1 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0001.webp"
import img2 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0002.webp"
import img3 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0003.webp"
import img4 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0004.webp"
import img5 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0005.webp"
import img6 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0006.webp"
import img7 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0007.webp"
import img8 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0008.webp"
import img9 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0009.webp"
import img10 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0010.webp"
import img11 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0011.webp"
import img12 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0012.webp"
import img13 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0013.webp"
import img14 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0014.webp"
import img15 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0015.webp"
import img16 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0016.webp"
import img17 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0017.webp"
import img18 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0018.webp"
import img19 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0019.webp"
import img20 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0020.webp"
import img21 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0021.webp"
import img22 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0022.webp"
import img23 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0023.webp"
import img24 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0024.webp"
import img25 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0025.webp"
import img26 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0026.webp"
import img27 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0027.webp"
import img28 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0028.webp"
import img29 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0029.webp"
import img30 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0030.webp"
import img31 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0031.webp"
import img32 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0032.webp"
import img33 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0033.webp"
import img34 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0034.webp"
import img35 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0035.webp"
import img36 from "@/public/sustainabilityReport/AzuraHotelSurdurulebilirlikRaporu_page-0036.webp"
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
        href="/documents/WYNDHAMALANYAHotelSürdürülebilirTurizmRaporu.pdf"
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
