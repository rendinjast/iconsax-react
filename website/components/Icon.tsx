import { createElement, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as Icons from 'iconsax-react'
import { useAppContext, useSelectedContext } from '../context'

const duration = 0.3
export const Icon = ({ icon }: { icon: keyof typeof Icons }) => {
  const { state } = useAppContext()
  const { showIcon } = useSelectedContext()
  const ref = useRef(null)

  useEffect(() => {
    console.log(icon)
  }, [icon])
  const animateEnter = () => {
    gsap
      .to(ref.current, { translateY: '-2px', borderColor: '#7045D4', duration })
      .play()
  }
  const animateLeave = () => {
    gsap
      .to(ref.current, { translateY: '2px', borderColor: '#1d1d1d', duration })
      .play()
  }

  const handleClick = () => {
    if (!showIcon) return
    showIcon(icon)
  }

  const Element = () => {
    console.log(icon)
    return createElement(Icons[icon], {
      color: state.color,
      variant: state.variant,
      size: state.size,
      className: 'transition-all duration-200',
    })
  }
  return (
    <span
      ref={ref}
      onMouseEnter={animateEnter}
      onMouseLeave={animateLeave}
      onClick={handleClick}
      className="icon bg-card rounded-xl border-2 border-border cursor-pointer flex justify-center items-center h-36 w-36 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <span>{Element()}</span>
        <span className="text-xs font-light text-gray-500 text-center overflow-hidden overflow-ellipsis w-32">
          {icon}
        </span>
      </div>
    </span>
  )
}
