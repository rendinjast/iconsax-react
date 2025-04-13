import { ArrowDown2 } from 'iconsax-reactjs'
import { useRef, useState } from 'react'
import { useOnClickOutside, useWindowSize } from '../hooks'
import { VariantType } from '../store/IconContext'

type OptionValue = VariantType | number

type OptionType<T extends OptionValue> = T

interface Props<T extends OptionValue> {
  options: OptionType<T>[]
  label: string
  value: T
  onChange: (value: T) => void
}

export const Selector = <T extends OptionValue>({
  options,
  label,
  value,
  onChange,
}: Props<T>) => {
  const { width } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  const handleChange = (op: T) => {
    setIsOpen(false)
    onChange(op)
  }
  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setIsOpen((prv) => !prv)}
        className="h-10 flex gap-4 bg-card justify-center items-center pl-3 pr-2 rounded-xl cursor-pointer"
      >
        <span>{width < 600 ? value : `${label}: ${value}`}</span>
        <ArrowDown2
          className={`transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={14}
          color="white"
        />
      </div>
      {isOpen && (
        <div className="absolute w-full flex flex-col top-12 z-30 left-2/4 transform -translate-x-1/2  m-auto bg-bg border-2 border-primary rounded-2xl">
          {options.map((op) => (
            <span
              key={op}
              onClick={() => handleChange(op)}
              className="text-center cursor-pointer py-2 px-4"
            >
              {op}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
