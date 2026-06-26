import React from 'react'
import Image from "next/image"
import image1 from "../Image/contact2.jpg"
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Link from 'next/link';
import {useTranslations} from 'next-intl';

// Divider bileşeni: md ve üzeri ekranlarda görünür, responsive negatif margin ile sola kayar.
const Divider = () => (
  <div className='hidden lg:flex items-center justify-start'>
    <div className='bg-lagoBlack w-[1px] h-[90px] ' />
  </div>
);

// İletişim sütunu bileşeni: ikon, başlık ve açıklama alanını içerir.
const ContactColumn = ({ icon, title, children }) => (
  <div className='flex items-start justify-start gap-[17px] '>
    <div className='flex'>
      {icon}
    </div>
    <div className='flex flex-col items-start justify-start text-start gap-[10px] lg:gap-[17px]'>
      <h4 className='text-lagoBlack font-marcellus text-[22px] lg:text-[24px] leading-[28px] lg:leading-[32px] capitalize font-normal'>{title}</h4>
      <div className='text-lagoGray font-jost text-[18px] font-normal leading-[26px] tracking-[0.72px]'>{children}</div>
    </div>
  </div>
);

const Page = () => {
  const t = useTranslations('ContactPage');
  const reservationPhoneHref = "tel:+902422121741";
  const reservationPhoneLabel = "0242 212 17 41";
  const receptionPhoneHref = "tel:+902425288888";
  const receptionPhoneLabel = "0242 528 88 88";

  return (
    <div className='flex flex-col justify-center items-center mb-[4%] w-screen'>
      {/* Resim ve overlay container */}
      <div className='relative flex w-full h-[60vh]'>
        <Image 
          src={image1} 
          width={1000} 
          height={3000} 
          className='w-full h-full object-cover' 
          alt="Header Image" 
        />
        <div className='absolute inset-0 bg-black/40 z-[1]'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center gap-[30px] lg:gap-[50px] z-[20]'>
          <h1 className="font-jost text-[12px] md:text-[16px] font-medium leading-[14px] tracking-[0.6px] uppercase text-white">
         {t("contactTitle")}
          </h1>
          <p className="font-jost text-[40px] lg:text-[56px] md:text-[80px] font-medium leading-[48px] md:leading-[64px] tracking-[-1.6px] text-white">
          {t("connectWithUs")}
          </p>
        </div>
      </div>
      
      {/* İletişim bilgileri: Özel grid yapısı */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] justify-start items-start w-[87.79%] md:w-[91.4%] lg:w-[76.8%] lg:min-w-[976px] xl:w-[1106px] gap-[30px] md:gap-[50px] xl:gap-[79px] mt-[100px]'>
        
        <ContactColumn icon={<CiLocationOn size={28} color='#1D1D1B'/>} title={t("ourAddress")}>
       <Link href="https://maps.app.goo.gl/usJ9fRr3Po35C3bw8" className='text-[16px] lg:text-[18px] font-normal leading-normal lg:leading-[26px] tracking-[0.72px] text-[#4B4E4F] whitespace-nowrap'   rel="norefferer nofollower"
                  target="_blank">Türkler Mah. Kargı Çayı Cad. <br/>No:10 Alanya / Turkey</Link>
        </ContactColumn>
        
        <Divider />
        
        <ContactColumn icon={<FiPhone size={22} className='mt-1' color='#1D1D1B'/>} title={t("phoneNumbers")}>
         <div className='flex flex-col gap-[14px] text-[#4B4E4F]'>
          <div className='flex flex-col gap-[4px]'>
            <span className='text-[11px] lg:text-[12px] uppercase tracking-[0.88px] text-[#8A8D8E]'>
              {t("reservationLabel")}
            </span>
            <Link href={reservationPhoneHref} className='text-[16px] lg:text-[18px] leading-normal lg:leading-[26px] whitespace-nowrap underline'>
              {reservationPhoneLabel}
            </Link>
          </div>
          <div className='flex flex-col gap-[4px]'>
            <span className='text-[11px] lg:text-[12px] uppercase tracking-[0.88px] text-[#8A8D8E]'>
              {t("receptionLabel")}
            </span>
            <Link href={receptionPhoneHref} className='text-[16px] lg:text-[18px] leading-normal lg:leading-[26px] whitespace-nowrap underline'>
              {receptionPhoneLabel}
            </Link>
          </div>
         </div>
        </ContactColumn>
        
        <Divider />
        
        <ContactColumn icon={<CiLocationOn size={28} color='#1D1D1B'/>} title={t("emailAddress")}>
         <span className='text-[16px] lg:text-[18px] font-normal leading-normal lg:leading-[26px] tracking-[0.72px] text-[#4B4E4F]'> info@azuraworldhotel.com</span>
        </ContactColumn>
      </div>
    </div>
  )
}

export default Page
