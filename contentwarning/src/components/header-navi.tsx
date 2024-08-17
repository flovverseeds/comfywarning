'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { cva , VariantProps } from 'class-variance-authority'

const buttonVariants = cva("", {
  variants: {
    side: {
      left: "nostalgic-text  text-nowrap rotate-[315deg] z-10 text-[15px] font-extrabold text-noir pointer-events-none",
      right: "nostalgic-text text-nowrap rotate-[45deg] z-10 text-[15px] font-extrabold text-noir pointer-events-none",
    },
  },
});
interface HeaderProps{
  navi : string;
  language : string;
}

const HeaderNAvi =({ navi, language }: HeaderProps) =>{
return (
<section>
  <div className="relative h-[100px] md:h-[200px] w-full flex justify-between">
    {/* Left Navigation Button */}
    <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
      {/* Clickable Area for Left Navigation */}
      <a
        href="#left"
        className="absolute inset-0 cursor-pointer bg-minty hover:bg-noir text-noir hover:text-minty"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      >
        <p className="absolute top-1/3 right-1/3 left-1  nostalgic-text text-nowrap rotate-[315deg] z-10 text-[16px] md:text-[30px] font-extrabold pointer-events-none">
          {navi}
        </p>
      </a>
    </div>
    {/* Right Navigation Button */}
    <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
      {/* Clickable Area for Right Navigation */}
      <a
        href="#right"
        className="absolute inset-0 cursor-pointer bg-minty hover:bg-noir text-noir hover:text-minty"
        style={{
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}>
        <p className="absolute top-1/3 left-1/3 right-1 nostalgic-text text-nowrap rotate-[45deg] z-10 text-[16px] md:text-[30px] font-extrabold pointer-events-none">
          {language}
        </p>
      </a>
    </div>
  </div>
</section>
)}
export default HeaderNAvi