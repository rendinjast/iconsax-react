import React, { FC } from 'react'
import Image from 'next/image'
import { Heart, Link } from 'iconsax-react'
import { RainbowButton } from '.'

export const Header = () => {
  return (
    <div className="pt-8 container m-auto">
      <div className="top-header flex justify-center md:justify-around">
        <a
          href=""
          className="text-xs justify-center hidden md:flex items-center gap-1"
          target="_blank"
          rel="noreferrer"
        >
          github
          <Link color="#eee" size={14} variant="TwoTone" />
        </a>
        <span className="flex items-center justify-center text-xs text-gray-300">
          Website Designed and built with
          <Heart variant="Bold" size={16} color="red" className="mx-1" /> by
          <a
            className="mx-1 border-b border-primary"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rendinjast"
          >
            Erfan Khadivar
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center gap-10 mt-36">
        <h1 className="text-5xl md:text-8xl font-bold flex-row break-words">
          ICONAMOON
        </h1>
        <div className="flex-auto flex space-x-3 h-11">
          <RainbowButton>Download All V.1</RainbowButton>
          <button className="px-6 text-white transition-colors duration-150 bg-bg h-full rounded-full text-sm font-normal focus:shadow-outline border-2 border-border">
            get Started
          </button>
        </div>
      </div>
    </div>
  )
}
