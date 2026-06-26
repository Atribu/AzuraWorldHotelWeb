"use client";

import React, { useState } from "react";
import { Link } from '@/i18n/navigation';
import CookieSvg from "./CookieSvg";
import PhoneSvg from "./Header/Icons/Phone";
import CookiePopup from "./CookiePopup"; // CookiePopup'u import et
import {useTranslations} from 'next-intl';

const BookNow = () => {
  const [isOpen, setIsOpen] = useState(false); // Popup açık mı?
  const t = useTranslations('Header');

  return (
    <div className="fixed flex bottom-0 left-0 right-0 z-[980] w-full md:hidden bg-[rgba(29,29,27,0.80)] backdrop-blur-[2px] py-[17px] items-center justify-center">
      <div className="flex justify-center items-center w-[98%] gap-[18px] h-full">
        
        {/* 📌 Butona tıklayınca Popup açılacak */}
        <button 
          className="flex items-center justify-center border w-[45px] h-[38px] border-white"
          onClick={() => setIsOpen(true)}
        >
          <CookieSvg className="flex" width={25} height={25} />
        </button>

        <Link href="tel:+902422121741" className="flex items-center justify-center w-[45px] h-[38px] border border-white">
          <PhoneSvg className="flex" width={25} height={25} color="white" />
        </Link>

        <Link   href="https://azuraworld.orsmod.com/"
               rel="norefferer nofollower"
                  target="_blank" className="flex whitespace-nowrap text-white py-[14px] px-[28px] h-[39px] border border-white text-[16px] leading-[24px] uppercase font-medium font-jost items-center justify-center text-center">
          {t("booknow")}
        </Link>
      </div>

      {/* 📌 Popup Açıkken Göster */}
      {isOpen && <CookiePopup onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default BookNow;
