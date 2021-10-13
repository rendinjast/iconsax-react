import { createElement, useEffect, useRef, useState } from 'react'
import * as Icons from 'iconsax-react'
import { useAppContext, useSelectedContext } from '../context'
import gsap from 'gsap'
import { useOnClickOutside } from '../hooks'

const duration = 300
export const SelectedIcon = () => {
  const { icon, hideIcon } = useSelectedContext()
  const { state } = useAppContext()
  const [isOpen, setIsOpen] = useState<boolean | undefined>(
    icon?.visible || false
  )
  const ref = useRef(null)
  useOnClickOutside(ref, (e) => {
    const path = e.composedPath() as HTMLElement[]
    let isAnIcon = false

    for (let p = 0; p < path.length; p++) {
      if (path[p].classList && path[p].classList.contains('icon')) {
        return (isAnIcon = true)
      }
    }
    if (!isAnIcon) handleClose()
  })

  const handleClose = () => {
    if (!hideIcon) return
    gsap
      .timeline({ reversed: false, paused: true })
      .to(ref.current, { height: '0', duration: duration / 1000 })
      .play()
    setTimeout(() => {
      hideIcon()
    }, duration)
  }
  useEffect(() => {
    if (isOpen) {
      gsap
        .timeline({ reversed: false, paused: true })
        .fromTo(
          ref.current,
          { height: '0' },
          { height: '300px', ease: 'expo.inOUt', duration: duration / 1000 }
        )
        .play()
    }
  }, [isOpen])
  useEffect(() => {
    setIsOpen(icon?.visible)
  }, [icon?.visible])

  const Element = () => {
    if (icon?.name) {
      return createElement(Icons[icon?.name], {
        color: state.color,
        variant: state.variant,
        secondaryColor: state.secondaryColor,
        size: state.size,
      })
    }
  }
  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          className="absolute bg-bg p-3 left-0 right-0 h-20 bottom-6 overflow-hidden -z-1 rounded-t-3xl border-2 border-border"
        >
          <div className="flex justify-between items-center">
            <span className="font-bold text-md">{icon?.name}</span>
            <span className="cursor-pointer" onClick={handleClose}>
              <Icons.CloseCircle1 color="#eee" />
            </span>
          </div>
          <div>{Element()!}</div>
        </div>
      )}
    </>
  )
}
