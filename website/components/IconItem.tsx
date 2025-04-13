import { useRef } from 'react'
import gsap from 'gsap'
import { Icon } from 'iconsax-reactjs'
import { useIconContext, selectedStore } from '../store'

// eslint-disable-next-line react/display-name
const IC = ({ Icon }: { Icon: Icon }) => {
  const {
    state: { color, size, variant },
  } = useIconContext()
  return (
    <span>
      <Icon
        className="transition-all duration-300"
        color={color}
        size={size}
        variant={variant}
      />
    </span>
  )
}

const duration = 0.3
export const IconItem = ({ Icon, name }: { Icon: Icon; name: string }) => {
  const showIcon = selectedStore((state) => state.showIcon)
  const ref = useRef(null)

  const animateEnter = () => {
    gsap
      .to(ref.current, {
        translateY: '-2px',
        borderColor: '#FF8A65',
        duration,
      })
      .play()
  }
  const animateLeave = () => {
    gsap
      .to(ref.current, { translateY: '2px', borderColor: '#1d1d1d', duration })
      .play()
  }

  const handleClick = () => {
    showIcon({ name, Icon })
  }

  return (
    <span
      ref={ref}
      onMouseEnter={animateEnter}
      onMouseLeave={animateLeave}
      onClick={handleClick}
      className="icon bg-card rounded-xl border-2 border-border cursor-pointer flex justify-center items-center h-[140px] w-[140px] overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <IC Icon={Icon} />
        <span className="text-xs font-light text-gray-500 text-center overflow-hidden overflow-ellipsis w-32">
          {name}
        </span>
      </div>
    </span>
  )
}
