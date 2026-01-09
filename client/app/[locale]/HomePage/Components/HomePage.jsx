import React from 'react'
import Reservation from './Reservation'
import Image from 'next/image'
import sembol from "./Icons/sembol2.svg"

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">

      {/* HERO IMAGE – MOBİL + DESKTOP */}
      <Image
        src="/photos/azuradeluxeworldmain.jpg"
        alt="Azura Deluxe World"
        fill
        priority
        className="absolute inset-0 object-cover z-[30]"
      />

      {/* LOGO */}
      <Image
        alt="logo"
        src={sembol}
        width={454.81}
        height={647}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[40]
                   w-[40vh] lg:w-[50vh] 2xl:w-[45vh] h-auto mix-blend-overlay"
      />

      <Reservation />
    </div>
  )
}