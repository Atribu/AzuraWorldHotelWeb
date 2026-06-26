import React from 'react'
import Image from "next/image"
import image1 from "../Image/contact2.jpg"
import { CiLocationOn } from "react-icons/ci";
import { FiMail, FiPhone } from "react-icons/fi";
import Link from 'next/link';
import {useTranslations} from 'next-intl';

// İletişim sütunu bileşeni: ikon, başlık ve açıklama alanını içerir.
const ContactColumn = ({ icon, title, children, className = "" }) => (
  <div className={`flex min-h-[200px] flex-col justify-center gap-[18px] px-[28px] py-[28px] lg:min-h-[220px] lg:px-[38px] lg:py-[34px] ${className}`}>
    <div className='flex items-center gap-[14px]'>
      {icon}
      <h4 className='text-lagoBlack font-marcellus text-[21px] lg:text-[23px] leading-[28px] lg:leading-[31px] capitalize font-normal'>
        {title}
      </h4>
    </div>
    <div className='max-w-[300px] text-lagoGray font-jost text-[17px] lg:text-[18px] font-normal leading-[30px] tracking-[0.48px]'>
      {children}
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
      
      <div className='mt-[90px] w-[87.79%] md:w-[91.4%] lg:w-[76.8%] xl:w-[1106px] overflow-hidden rounded-[24px] border border-[#1D1D1B]/10 bg-[#FFFEFC] shadow-[0_18px_60px_rgba(0,0,0,0.07)]'>
        <div className='grid grid-cols-1 lg:grid-cols-[1.05fr_1fr_1.05fr]'>
          <ContactColumn
            icon={<CiLocationOn size={26} color='#1D1D1B'/>}
            title={t("ourAddress")}
            className="border-b border-[#1D1D1B]/10 lg:border-b-0 lg:border-r"
          >
            <Link
              href="https://maps.app.goo.gl/usJ9fRr3Po35C3bw8"
              className='inline-flex max-w-[280px] text-[#4B4E4F] transition-colors duration-300 hover:text-lagoBlack'
              rel="noreferrer nofollow"
              target="_blank"
            >
              Türkler Mah. Kargı Çayı Cad. No:10 Alanya / Turkey
            </Link>
          </ContactColumn>

          <ContactColumn
            icon={<FiPhone size={22} color='#1D1D1B'/>}
            title={t("phoneNumbers")}
            className="border-b border-[#1D1D1B]/10 lg:border-b-0 lg:border-r"
          >
            <div className='flex max-w-[280px] flex-col gap-[18px] text-[#4B4E4F]'>
              <div className='flex flex-col gap-[4px]'>
                <span className='text-[11px] lg:text-[12px] uppercase tracking-[1.2px] text-[#8A8D8E]'>
                  {t("reservationLabel")}
                </span>
                <Link href={reservationPhoneHref} className='text-[17px] lg:text-[18px] leading-[28px] whitespace-nowrap underline decoration-[#1D1D1B]/35 underline-offset-[5px] transition-colors duration-300 hover:text-lagoBlack'>
                  {reservationPhoneLabel}
                </Link>
              </div>
              <div className='flex flex-col gap-[4px]'>
                <span className='text-[11px] lg:text-[12px] uppercase tracking-[1.2px] text-[#8A8D8E]'>
                  {t("receptionLabel")}
                </span>
                <Link href={receptionPhoneHref} className='text-[17px] lg:text-[18px] leading-[28px] whitespace-nowrap underline decoration-[#1D1D1B]/35 underline-offset-[5px] transition-colors duration-300 hover:text-lagoBlack'>
                  {receptionPhoneLabel}
                </Link>
              </div>
            </div>
          </ContactColumn>

          <ContactColumn
            icon={<FiMail size={22} color='#1D1D1B'/>}
            title={t("emailAddress")}
          >
            <Link
              href="mailto:info@azuraworldhotel.com"
              className='inline-flex max-w-[280px] break-all text-[#4B4E4F] underline decoration-[#1D1D1B]/25 underline-offset-[5px] transition-colors duration-300 hover:text-lagoBlack'
            >
              info@azuraworldhotel.com
            </Link>
          </ContactColumn>
        </div>
      </div>
    </div>
  )
}

export default Page
