"use client"
import React, { useState } from 'react';
import imgBanner from "../about/images/gal_son.jpg"
import AboutSection from './components/AboutSection';
import WebRuleSection from './components/WebRuleSection';
import MainBanner2 from '../GeneralComponents/MainBanner2';

const Page = () => {
    const [activeTab, setActiveTab] = useState("hakkinda");
    
  return (
    <div className='flex flex-col gap-[15px] md:gap-[22px] lg:gap-[30px] overflow-hidden bg-[#ffffff] items-center justify-center mb-16'>
      <MainBanner2
        img={imgBanner}
        span="Harmony with Nature"
        header="Terms Of Use"
      />
      <div className="flex w-[87.79%] md:w-[91.4%] lg:w-[76.8%] items-center justify-center gap-[20px] md:gap-[30px] lg:gap-[50px] mb-8 font-jost">
        <button onClick={() => setActiveTab("politikalar")} className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer ${
            activeTab === "hakkinda" ? "border-b border-[#676766]" : ""
          }`}>
          İnternet Sitesi Hakkında
        </button>
        <button onClick={() => setActiveTab("yonetmelik")} className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer ${
            activeTab === "yonetmelik" ? "border-b border-[#676766]" : ""
          }`}>
          İnternet Sitesi Yönetmeliği
        </button>
      </div>
      {activeTab === "yonetmelik" ? (
        <WebRuleSection />
      ) : (
        <>

     <AboutSection/>
      </>
      )}
    </div>
  )
}

export default Page
