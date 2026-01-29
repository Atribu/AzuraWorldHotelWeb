"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function Slide({ slide, marginClass, priority = false }) {
  return (
    <div
      className={`
        relative shrink-0 flex justify-center items-center ${marginClass}
        flex-[0_0_auto]
        lg:w-[360px] lg:h-[540px]
        md:w-[270px] md:h-[405px]
        w-[177.3px] h-[266px]
        overflow-hidden
        will-change-transform transform-gpu
        [backface-visibility:hidden] [transform:translateZ(0)]
      `}
    >
      <Image
        src={slide.src}
        alt={slide.title}
        fill
        priority={priority}
        quality={100}
        sizes="(min-width: 1024px) 360px, (min-width: 768px) 270px, 177px"
        className="
          object-cover object-center
          will-change-transform transform-gpu
          [backface-visibility:hidden] [transform:translateZ(0)]
        "
        // ✅ TEST: bunu 1 kez açıp dene.
        // Eğer değişiklik YOKSA -> görsellerin dosya çözünürlüğü düşük/soft export.
        // Eğer netleşirse -> next/image optimize kaynaklı, next.config ile çözeriz.
        // unoptimized
      />

      <div className="absolute inset-0 bg-lagoBlack/40 z-[1]" />

      <a
        href={slide.link}
        className="absolute inset-0 flex items-center justify-center pb-4
          text-white text-[20px] md:text-[30px] lg:text-[40px]
          leading-[9.852px] -tracking-[0.44px] font-normal
          md:leading-[15px] lg:leading-[20px]
          md:-tracking-[0.66px] lg:-tracking-[0.88px]
          font-marcellus transition z-[20]
        "
      >
        {slide.title}
      </a>
    </div>
  );
}

export default function Slider1({ slides }) {
  const t = useTranslations("Homepage.EmblaCarousel");

  const DEFAULT_SLIDES = [
    { src: require("./Images/accommodation.jpg"), title: t("accommodation"), link: "/rooms" },
    { src: require("./Images/Flavours.jpg"), title: t("restaurants"), link: "/restaurants" },
    { src: require("./Images/Beachandpool.jpg"), title: t("beachPools"), link: "/beachpools" },
    { src: require("./Images/Entertainment.jpg"), title: t("experiences"), link: "/entertainment" },
    { src: require("./Images/kids.jpg"), title: t("kids"), link: "/kidsclub" },
  ];

  const slidesOriginal = slides || DEFAULT_SLIDES;
  const slidesCombined = [...slidesOriginal, ...slidesOriginal];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      containScroll: false,
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playDirection: "forward",
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap() % slidesOriginal.length);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, slidesOriginal.length]);

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        <div
          ref={emblaRef}
          className="
            overflow-hidden w-full lg:w-[87.4%] lg:ml-[5.8%]
            will-change-transform transform-gpu
            [backface-visibility:hidden] [transform:translateZ(0)]
          "
        >
          <div
            className="
              flex md:h-[405px] lg:h-[540px] w-auto
              will-change-transform transform-gpu
              [backface-visibility:hidden] [transform:translateZ(0)]
            "
          >
            {slidesCombined.map((slide, index) => (
              <Slide
                key={index}
                slide={slide}
                marginClass="mr-[8.37px] md:mr-[12.75px] lg:mr-[17px]"
                priority={index < 2}
              />
            ))}
          </div>
        </div>

        {/* SOL OK */}
        <button
          className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2
                     z-[999] p-2 rounded-full bg-black/40 hover:bg-black/60
                     items-center justify-center"
          onClick={scrollPrev}
          type="button"
          aria-label="Previous slide"
        >
          <MdArrowBackIosNew size={26} color="white" />
        </button>

        {/* SAĞ OK */}
        <button
          className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2
                     z-[999] p-2 rounded-full bg-black/40 hover:bg-black/60
                     items-center justify-center"
          onClick={scrollNext}
          type="button"
          aria-label="Next slide"
        >
          <MdArrowForwardIos size={26} color="white" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="flex items-end justify-end w-[87.79%] md:w-[91.4%] mx-[6.10%] md:mx-[4.3%] lg:w-[87.4%] lg:mx-auto mt-[62px] relative">
        {slidesOriginal.map((_, i) => (
          <div
            key={i}
            className={`transition-all ${
              slidesOriginal.length === 4 ? "w-[25%]" : "w-[20%]"
            } h-[1px] ${selectedIndex === i ? "bg-[#24292C]" : "bg-[#848383]"}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
}