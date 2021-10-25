import { useRef, useState } from 'react'
import { BlockPicker, ColorChangeHandler } from 'react-color'
import { useIconContext } from '../store'
import { useOnClickOutside } from '../hooks'

export const IconColor = () => {
  const { state, dispatch } = useIconContext()
  const [isOpen, setIsOpen] = useState(false)
  const colorRef = useRef(null)

  useOnClickOutside(colorRef, () => setIsOpen(false))

  const handleChangeCOmplete: ColorChangeHandler = (color) => {
    dispatch({
      type: 'CHANGE_COLOR',
      payload: color.hex,
    })
  }
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prv) => !prv)}
        style={{
          backgroundColor: state.color,
          textShadow: '1px 1px 4px black',
        }}
        className="h-10 grid place-items-center px-4 rounded-xl cursor-pointer"
      >
        <span className="hidden w-16 text-center sm:block">{state.color}</span>
      </div>
      {isOpen && (
        <div ref={colorRef} className="absolute top-0 right-0">
          <BlockPicker
            className="shadow-2xl"
            color={state.color}
            onChangeComplete={handleChangeCOmplete}
            triangle="hide"
          />
        </div>
      )}
    </div>
  )
}
