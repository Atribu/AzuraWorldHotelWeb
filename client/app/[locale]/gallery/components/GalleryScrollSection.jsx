"use client"
import React, { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import Image from "next/image"

import img1 from "../images/Genel1.webp"
import img2 from "../images/Genel2.webp"
import img3 from "../images/Genel3webp.webp"
import img4 from "../images/Genel3.webp"
import img5 from "../images/Genel5.webp"
import img6 from "../images/Genel6.webp"
import img7 from "../images/Genel7.webp"
import img8 from "../images/Genel8.webp"
import img9 from "../images/Genel9.webp"
import img10 from "../images/Genel9.webp"
import img11 from "../images/Genel10.webp"
import img12 from "../images/Genel11.webp"
import img13 from "../images/Genel12.webp"
import img14 from "../images/Genel13.webp"
import img15 from "../images/Genel14.webp"
import img16 from "../images/Genel15.webp"
import img17 from "../images/Genel16.webp"
import img18 from "../images/Genel17.webp"
import img19 from "../images/Genel18.webp"
import img20 from "../images/Genel20.webp"
import img21 from "../images/Genel21.webp"
import img22 from "../images/Genel22.webp"
import img23 from "../images/Genel23.webp"
import img24 from "../images/Genel24.webp"
import img25 from "../images/Genel25.webp"
import img26 from "../images/Genel26.webp"
import img27 from "../images/Genel27.webp"
import img28 from "../images/Genel28.webp"
import img29 from "../images/Genel29.webp"

// import img30 from "../images/Genel29.webp"

import img30 from "../images/Breakfastbuffet7.webp"
import img31 from "../images/Breakfastbuffet9.webp"
import img32 from "../images/Breakfastbuffet11.webp"
import img33 from "../images/Dinnerbuffet4.webp"
import img34 from "../images/Dinnerbuffet9.webp"
import img35 from "../images/Dinnerbuffet10.webp"
import img36 from "../images/Dinnerbuffet17.webp"
import img37 from "../images/Dinnerbuffet19.webp"
import img39 from "../images/Milosmain9.webp"
import img40 from "../images/Milosmain11.webp"
import img41 from "../images/Milosmain23.webp"
import img42 from "../images/Saffron3.webp"
import img43 from "../images/Saffron12.webp"
import img44 from "../images/Saffron13.webp"

import img45 from "../images/ConnectionFam1.webp"
import img46 from "../images/ConnectionFam2.webp"
import img47 from "../images/ConnectionFam3.webp"
import img48 from "../images/ConnectionFam4.webp"
import img49 from "../images/Deluxedouble1.webp"
import img50 from "../images/Deluxedouble2.webp"
import img51 from "../images/Deluxedouble3.webp"
import img52 from "../images/Deluxedouble4.webp"
import img53 from "../images/Deluxedouble5.webp"
import img54 from "../images/Suite1.webp"
import img55 from "../images/Suite2.webp"
import img56 from "../images/Suite3.webp"
import img57 from "../images/Suite4.webp"
import img58 from "../images/Suite5.webp"

import img59 from "../images/Lounge2.webp"
import img60 from "../images/Lounge4.webp"
import img61 from "../images/Lounge5.webp"
import img62 from "../images/Lounge13.webp"
import img63 from "../images/Lounge15.webp"
import img64 from "../images/Pool5.webp"
import img65 from "../images/Pool6.webp"
import img66 from "../images/Pool7.webp"

import img67 from "../images/Beach3.webp"
import img68 from "../images/Beach4.webp"
import img69 from "../images/Beach5.webp"
import img70 from "../images/Beach8.webp"
import img71 from "../images/Beach15.webp"
import img72 from "../images/Kapalıhavuz3.webp"
import img73 from "../images/Kapalıhavuz5.webp"
import img74 from "../images/Kapalıhavuz6.webp"
import img75 from "../images/Kapalıhavuz8.webp"
import img76 from "../images/Kapalıhavuz11.webp"
import img77 from "../images/PoolOutdoor2.webp"
import img78 from "../images/PoolOutdoor10.webp"
import img79 from "../images/PoolOutdoor11.webp"
import img80 from "../images/PoolOutdoor18.webp"
import img81 from "../images/PoolOutdoor19.webp"
import img82 from "../images/PoolOutdoor20.webp"

import img83 from "../images/Miniclub1.webp"
import img84 from "../images/Miniclub2.webp"
import img85 from "../images/Miniclub3.webp"
import img86 from "../images/Miniclub4.webp"
import img87 from "../images/Miniclub5.webp"
import img88 from "../images/Miniclub6.webp"
import img89 from "../images/Miniclub7.webp"
import img90 from "../images/Miniclub14.webp"
import img91 from "../images/Miniclub17.webp"
import img92 from "../images/Miniclub18.webp"

import img93 from "../images/Spa1.webp"
import img94 from "../images/Spa2.webp"
import img95 from "../images/Spa3.webp"
import img96 from "../images/Spa5.webp"
import img97 from "../images/Spa6.webp"
import img98 from "../images/Spa9.webp"
import img99 from "../images/Spa11.webp"
import img100 from "../images/Spa13.webp"
import img101 from "../images/Spa16.webp"
import img102 from "../images/Spa23.webp"
import img103 from "../images/Spa30.webp"
import img104 from "../images/Spa31.webp"
import img105 from "../images/Spa40.webp"
import img106 from "../images/Spa41.webp"
import img107 from "../images/Spa46.webp"
import img108 from "../images/Spa48.webp"

import img109 from "../images/Meeting1.webp"
import img110 from "../images/Meeting2.webp"
import img111 from "../images/Meeting3.webp"
import img112 from "../images/Meeting4.webp"
import img113 from "../images/Meeting5.webp"
import img114 from "../images/Meeting6.webp"

const GalleryScrollSection = () => {
  const t = useTranslations("Gallery")

  // Kategorilere göre resimler
  const imageCategories = {
    [t("general")]: [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
      img11, img12, img13, img14, img15, img16, img17, img18, img19,
      img20, img21, img22, img23, img24, img25, img26, img27, img28, img29,
    ],
    [t("rooms")]: [
      img45, img46, img47, img48, img49, img50, img51, img52, img53, img54,
      img55, img56, img57, img58,
    ],
    [t("flavours")]: [
      img30, img31, img32, img33, img34, img35, img36, img37,
      img39, img40, img41, img42, img43, img44,
    ],
    [t("bar")]: [img59, img60, img61, img62, img63, img64, img65, img66],
    [t("pool")]: [
      img67, img68, img69, img70, img71, img72, img73, img74, img75, img76,
      img77, img78, img79, img80, img81, img82,
    ],

    // ✅ ENTERTAINMENT KATEGORİSİ GEÇİCİ OLARAK KAPALI (YORUMDA)
    // [t("entertainment")]: [img46,img47,img48,img49,img50,img51,img52,img53,img54,img55,img56,img57],

    [t("kidsclub")]: [
      img83, img84, img85, img86, img87, img88, img89, img90, img91, img92,
    ],
    [t("spa")]: [
      img93, img94, img95, img96, img97, img98, img99, img100, img101, img102, img103, img104, img105, img106, img107, img108,
      img67, img68, img70,
    ],
    [t("meeting")]: [img109, img110, img111, img112, img113, img114,],
  }

  const categories = Object.keys(imageCategories)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const [modalIndex, setModalIndex] = useState(null)
  const [modalImage, setModalImage] = useState(null)

  const openModal = (img, index) => {
    setModalImage(img)
    setModalIndex(index)
  }

  const scrollPrev = () => {
    const images = imageCategories[selectedCategory]
    const newIndex = modalIndex === 0 ? images.length - 1 : modalIndex - 1
    setModalIndex(newIndex)
    setModalImage(images[newIndex])
  }

  const scrollNext = () => {
    const images = imageCategories[selectedCategory]
    const newIndex = modalIndex === images.length - 1 ? 0 : modalIndex + 1
    setModalIndex(newIndex)
    setModalImage(images[newIndex])
  }

  useEffect(() => {
    if (!modalImage) return

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") scrollPrev()
      else if (e.key === "ArrowRight") scrollNext()
      else if (e.key === "Escape") setModalImage(null)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [modalImage, selectedCategory, modalIndex]) // 👈 burada fonksiyonları dependency’e koymamak daha stabil

  return (
    <div className="flex w-screen items-center justify-center mt-[50px] max-w-[1440px]">
      <div className="flex flex-col items-center justify-between w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[40px]">
        {/* Butonlar */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:flex items-center justify-center xl:justify-between gap-[10px] w-full max-w-[1008px]">
          {Object.keys(imageCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex border border-lagoGray items-center justify-center whitespace-nowrap py-[12px] px-[16px] lg:py-[16px] lg:px-[20px] lg:w-[140px] text-[12px] lg:text-[14px] font-medium uppercase leading-[125%] -tracking-[0.33px] font-jost ${
                selectedCategory === category ? "bg-lagoGray text-white" : "text-lagoGray"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resimler */}
        <div className="flex lg:w-[1006px] h-[500px] md:h-[1000px] lg:h-[1700px]">
          <div className="flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto">
            <div className="columns-2 lg:columns-3 gap-[16px] lg:gap-[0px] transition-all duration-[350ms] ease-in-out cursor-pointer">
              {imageCategories[selectedCategory].map((imgSrc, index) => (
                <div
                  className="mb-[19.16px] transition-all duration-[350ms] ease-in-out cursor-pointer"
                  key={index}
                  onClick={() => openModal(imgSrc, index)}
                >
                  <Image src={imgSrc} alt="gallery" className="lg:w-[322px] h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal (Lightbox) */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalImage(null)}
          >
            <div className="relative w-[35%]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={modalImage}
                alt="Enlarged gallery"
                className="w-full h-auto object-contain max-h-[720px]"
              />

              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollPrev}
                aria-label="Previous"
              >
                <MdArrowBackIosNew size={32} />
              </button>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollNext}
                aria-label="Next"
              >
                <MdArrowForwardIos size={32} />
              </button>
            </div>

            <button
              className="absolute top-6 right-4 text-white text-4xl"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryScrollSection