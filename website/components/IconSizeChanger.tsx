import { ArrowDown2 } from 'iconsax-react'
import { useRef, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useOnClickOutside } from '../hooks'

const options = [12, 16, 24, 32, 44, 60, 80] as const

export const IconSizeChanger = () => {
  const { state, dispatch } = useAppContext()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  const handleSizeChange = (op: number) => {
    setIsOpen(false)
    dispatch({ type: 'CHANGE_SIZE', payload: op })
  }
  return (
    <div ref={ref} className="relative hidden sm:block">
      <div
        onClick={() => setIsOpen((prv) => !prv)}
        className={`flex justify-center items-center pl-3 pr-2 py-2 ${
          isOpen ? 'rounded-b-2xl' : 'rounded-full'
        } border border-border cursor-pointer`}
      >
        <span>{state.size}</span>
        <ArrowDown2
          className={`transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={14}
          color="white"
        />
      </div>
      {isOpen && (
        <div className="absolute flex flex-col bottom-7 left-2/4 transform -translate-x-1/2  m-auto bg-bg border border-border border-b-0 rounded-t-2xl">
          {options.map((op) => (
            <span
              key={op}
              onClick={() => handleSizeChange(op)}
              className="text-center py-1 cursor-pointer px-4"
            >
              {op}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
