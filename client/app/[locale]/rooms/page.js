import React from "react";
import RoomsBanner from "./components/RoomsBanner";
import RoomsInfoSection from "./components/RoomsInfoSection";
import RoomsSection from "./components/RoomsSection";
import RoomsSectionReverse from "./components/RoomsSectionReverse";
import RoomsParallaxSection from "./components/RoomsParallaxSection";

import imgFamily from "./images/fam1.png";
import imgFamily2 from "./images/fam2.png";
import imgdeluxe from "./images/deluxe2.png";
import imgdeluxe2 from "./images/deluxe.png";

import imgFantasy from "./images/fantasy1.png";
import imgFantasy2 from "./images/fantasy2.png";

import ContactSection2 from "../GeneralComponents/Contact/ContactSection2";
import {useTranslations} from 'next-intl';

const Page = () => {
  const t = useTranslations('Rooms.Room1');
  const t2 = useTranslations('Rooms.Room2');
  const t3 = useTranslations('Rooms.Room3');

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center gap-[50px] lg:gap-[100px] bg-[#fbfbfb]">
      <RoomsBanner />
      <RoomsInfoSection />
      <RoomsSection
      id="deluxeroom"
        img={imgdeluxe}
        img2={imgdeluxe2}
        header={t("title")}
        text={t("text")}
        span={t("area")}
        span2={t("view")}
        link="/rooms/deluxeroom" 
      />
      <RoomsSectionReverse
      id="familyroom"
        img={imgFamily}
        img2={imgFamily2}
        header={t2("title")}
        text={t2("text")}
        span={t2("area")}
        span2={t2("view")}
        link="/rooms/familyroom" 
      />

      <RoomsSection
       id="fantasyroom"
        img={imgFantasy}
        img2={imgFantasy2}
        header={t3("title")}
        text={t3("text")}
        span={t3("area")}
        span2={t3("view")}
        link="/rooms/fantasyroom" 
      />

      <RoomsParallaxSection />
      <ContactSection2/>
    </div>
  );
};

export default Page;
