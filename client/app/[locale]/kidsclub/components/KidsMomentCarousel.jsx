"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const KidsMomentCarousel = ({ images, header, showheader }) => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "center",
    startIndex: 0,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Önceki ve sonraki kaydırma fonksiyonları
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    setSelectedIndex(emblaApi.selectedScrollSnap());

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-screen justify-center items-center text-center gap-[30px] lg:gap-[50px]">
      {showheader && (
        <h2 className="text-[28px] md:text-[32px] lg:text-[48px] text-black font-marcellus font-normal leading-[48px]">
          {header}
        </h2>
      )}

      <div className="flex w-full justify-center items-center h-full">
        {/* WRAPPER: relative + overflow-hidden (oklar burada konumlanacak) */}
        <div className="relative w-full overflow-hidden">
          {/* SOL OK (sadece md ve üstü) */}
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

          {/* SAĞ OK (sadece md ve üstü) */}
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

          {/* CAROUSEL */}
          <div
            className="flex overflow-hidden relative w-full flex-col justify-center items-center"
            ref={emblaRef}
          >
            <div className="flex grid-flow-col">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-[0_0_auto] min-w-0 ml-[2%] md:ml-[10px] lg:h-[600px]"
                >
                  <Image
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt={`Slide ${index + 1}`}
                    className="flex h-[25vh] sm:h-[30vh] lg:h-full md:min-h-[420px] md:h-[38vh] w-auto object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsMomentCarousel;