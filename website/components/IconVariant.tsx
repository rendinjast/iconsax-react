import { Dispatch, useEffect } from 'react'
import { Selector } from '.'
import { useWindowSize } from '../hooks'
import { useIconContext, Variants } from '../store'
import { IconState, VariantType } from '../store/IconContext'
import { IconAction } from '../store/iconReducer'

interface ListProps {
  state: IconState
  dispatch: Dispatch<IconAction>
}

const MenuList = ({ state, dispatch }: ListProps) => {
  return (
    <>
      <div className="rounded-xl h-10 border-indigo-600 overflow-hidden flex">
        {Variants.map((variant) => (
          <span
            onClick={() =>
              dispatch({ type: 'CHANGE_VARIANT', payload: variant })
            }
            className={`px-1 xs:px-4 cursor-pointer grid place-items-center transition-colors duration-300 ${
              variant === state.variant ? 'bg-primary text-white' : 'bg-card'
            }`}
            key={variant}
          >
            {variant}
          </span>
        ))}
      </div>
    </>
  )
}
const DropDownList = ({ state, dispatch }: ListProps) => {
  const onChange = (variant: VariantType) => {
    dispatch({ type: 'CHANGE_VARIANT', payload: variant })
  }
  return (
    <div>
      <Selector
        label="variant"
        onChange={onChange}
        options={Variants.concat()}
        value={state.variant!}
      />
    </div>
  )
}
export const IconVariant = () => {
  const { width } = useWindowSize()
  useEffect(() => {
    console.log(width)
  }, [width])
  const { state, dispatch } = useIconContext()
  // return <MenuList state={state} dispatch={dispatch} />
  if (width >= 1030) {
    return <MenuList state={state} dispatch={dispatch} />
  } else {
    return <DropDownList state={state} dispatch={dispatch} />
  }
}

export default IconVariant
