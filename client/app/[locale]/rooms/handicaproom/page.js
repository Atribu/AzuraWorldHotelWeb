"use client";

import React from "react";
import { useTranslations } from "next-intl";

import SubRoomBanner from "../subroomComponent/components/SubRoomBanner";
import SubroomCarousel from "../subroomComponent/components/SubroomCarousel";
import RoomFeatures from "../subroomComponent/components/RoomFeatures";
import BackgroundSection from "../subroomComponent/components/BackgroundSection";
import RoomTour from "../subroomComponent/components/RoomTour";
import OtherOptions from "../subroomComponent/components/OtherOptions";
import ContactSection2 from "../../GeneralComponents/Contact/ContactSection2";

import options1 from "../deluxeroom/images/deluxe4.jpg";
import options2 from "../superiorroom/images/fantasy4.jpg";

import img1 from "../deluxeroom/images/deluxe1.jpg";
import img2 from "../deluxeroom/images/deluxe2.jpg";
import img3 from "../deluxeroom/images/deluxe3.jpg";
import img4 from "../deluxeroom/images/deluxe4.jpg";
import img5 from "../deluxeroom/images/deluxe5.webp";
import img6 from "../deluxeroom/images/deluxe6.webp";
import img7 from "../deluxeroom/images/deluxe7.webp";
import img8 from "../deluxeroom/images/deluxe8.jpg";
import img9 from "../deluxeroom/images/deluxe9.webp";

// Not: img1..img9 ve options1..2 görsellerini mevcut import yapına göre korudum.
// Eğer bu sayfaya özel görsellerin varsa aynı değişken adlarını o dosyalardan import et.
const HandicapRoomPage = () => {
  // i18n namespace'leri HandicapRoom olarak değiştirildi
  const t  = useTranslations("HandicapRoom");
  const t2 = useTranslations("HandicapRoom.RoomFeatures");
  const t3 = useTranslations("HandicapRoom.BackgroundSection");
  const t4 = useTranslations("HandicapRoom.OtherOptions");
  const t5 = useTranslations("HandicapRoom.RoomTour");

  // Banner ve arka plan metinleri
  const subroomBannerText = [t("span1"), t("span2"), t("span3")];
  const backgroundTexts   = [t3("text")];

  // İkon alt yazıları (ör: tekerlekli sandalye erişimi, roll-in duş)
  const iconTexts = [t2("span1"), t2("span2")];

  // Özellik listesi — engelli dostu oda özelliklerine göre isimlendirildi
  const features = [
    t2("feature1"),  // Step-free giriş, geniş kapılar (>=90 cm)
    t2("feature2"),  // Roll-in duş / düz zemin duş
    t2("feature3"),  // Duş & tuvalette tutunma barları
    t2("feature4"),  // Düşük seviyede lavabo ve prizler
    t2("feature5"),  // Acil durum çekme ipi
    t2("feature6"),  // Görsel/işitsel alarm
    t2("feature7"),  // Yatağa transfer için uygun alan
    t2("feature8"),  // Eşik/merdiven yok
    t2("feature9"),  // Engelli otoparkına yakın konum
    t2("feature10"), // Tekerlekli sandalye ile hareket alanı
    t2("feature11"), // Düşük eşiğe sahip balkon/teras (varsa)
  ];

  // Galeri
  const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // Diğer oda seçenekleri (örnek: Aile ve Fantasy odaları)
  const rooms = [
    {
      id: 1,
      img: options1,
      title: t4("title1"),
      description: t4("subtitle"),
      size: t4("area1"),
      capacity: t4("person1"),
      text: t4("text1"),
      link: "/rooms/familyroom",
    },
    {
      id: 2,
      img: options2,
      title: t4("title2"),
      description: t4("subtitle"),
      size: t4("area2"),
      capacity: t4("person2"),
      text: t4("text2"),
      link: "/rooms/superiorroom",
    },
  ];

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]">
      <div className="flex flex-col">
        <SubRoomBanner
          img={img1}
          span={t("subtitle")}
          header={t("title")}
          texts={subroomBannerText}
        />
        <SubroomCarousel images={carouselImages} />
      </div>

      {/* Engelli dostu oda: koltuk opsiyonu oda düzenine göre değişebilir; güvenli varsayılan false */}
      <RoomFeatures
        span={t2("subtitle")}
        header={t2("title")}
        text={t2("text")}
        header2={t2("subtitle2")}
        header3={t2("subtitle3")}
        text2={t2("text2")}
        iconsTexts={iconTexts}
        features={features}
        sofa={false}
        sofaText={t2("sofa")}
      />

      <BackgroundSection
        span={t3("subtitle")}
        header={t3("title")}
        texts={backgroundTexts}
        link="/"
        img={img3}
      />

      {/* 360 turlar (linkler sende farklıysa değiştir) */}
      <RoomTour
        span={t5("span")}
        header={t5("title")}
        text={t5("text")}
        link="https://kuula.co/share/collection/7brmW?logo=1&info=0&fs=1&vr=1&autorotate=0.22&autop=10&autopalt=1&thumbs=4&margin=2&alph"
      />


      <OtherOptions rooms={rooms} />
      <ContactSection2 />
    </div>
  );
};

export default HandicapRoomPage;
