import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { BlockPicker, ColorChangeHandler } from 'react-color'
import { useAppContext } from '../context/AppContext'
import { useOnClickOutside } from '../hooks'

export const ColorPicker = () => {
  const { state, dispatch } = useAppContext()
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
      <span
        onClick={() => setIsOpen((prv) => !prv)}
        style={{ backgroundColor: state.color }}
        className="w-4 h-4 rounded-full block cursor-pointer"
      ></span>
      {isOpen && (
        <div ref={colorRef} className="absolute bottom-2 right-6">
          <BlockPicker
            color={state.color}
            onChangeComplete={handleChangeCOmplete}
            triangle="hide"
          />
        </div>
      )}
    </div>
  )
}
