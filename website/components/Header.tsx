import React from 'react'
import { Heart } from 'iconsax-react'
import { RainbowButton } from '.'

export const Header = () => {
  return (
    <div className="py-8 container m-auto">
      <div className="top-header text-xs text-gray-300 flex justify-center md:justify-around">
        <span className="">
          ©️ iconsax
          <a
            className="mx-1 border-b border-primary"
            target="_blank"
            rel="noreferrer"
            href="https://iconsax.io/"
          >
            official website
          </a>
          <a
            className="mx-1 border-b border-primary"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lusaxweb/iconsax"
          >
            github page
          </a>
        </span>
        <span className="flex items-center justify-center ">
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
      <div className="flex flex-col items-center my-36">
        <h1 className="text-5xl md:text-6xl font-bold flex-row break-words">
          ICONSAX for React and React Native
        </h1>

        <div className="flex-auto flex space-x-3 h-11 mt-7">
          {/* <button className="px-6 text-white transition-colors duration-150 bg-bg h-full rounded-full text-sm font-normal focus:shadow-outline border-2 border-border">
            iconsax-react npm
          </button> */}
          <RainbowButton>Get Started ✌️</RainbowButton>
          <div className="px-4 text-white flex justify-center items-center transition-colors duration-150 bg-bg h-full rounded-full text-sm font-normal focus:shadow-outline border-2 border-border">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/package/iconsax-react"
              className="border-r-2 border-border pr-2 mr-2"
            >
              iconsax-react
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/package/iconsax-react-native"
            >
              iconsax-react-native
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
