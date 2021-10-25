import { FC } from 'react'

export const RainbowButton: FC = ({ children }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/rendinjast/iconsax-react"
      className="relative btn rounded-full overflow-hidden w-28 md:w-36 h-full"
    >
      <span className="w-full h-full rainbow block"></span>
      <div
        className={`child absolute bg-bg  m-0.5 top-0 left-0 right-0 bottom-0 flex justify-center items-center rounded-full font-normal`}
      >
        {children}
      </div>
    </a>
  )
}
