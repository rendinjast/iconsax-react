import { FC } from 'react'

interface Props {
  secondary?: boolean
}
export const RainbowButton: FC<Props> = ({ children, secondary }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/rendinjast/iconsax-react"
      className="relative btn rounded-full overflow-hidden w-36 h-full cursor-pointer"
    >
      <span className="w-full h-full rainbow block"></span>
      <div
        className={`child absolute bg-bg  m-0.5 top-0 left-0 right-0 bottom-0 flex justify-center items-center rounded-full font-normal text-sm `}
      >
        {children}
      </div>
    </a>
  )
}
