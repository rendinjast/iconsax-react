import { createContext, useContext, Dispatch, FC, useReducer } from 'react'
import IconReducer, { IconAction } from './iconReducer'

export const Variants = [
  'Linear',
  'Outline',
  'Bold',
  'Bulk',
  'Broken',
  'TwoTone',
] as const

export type VariantType = typeof Variants[number] | undefined

export interface IconState {
  search: string
  size: number
  color: string
  variant: VariantType
}

const initialValue: IconState = {
  search: '',
  size: 32,
  color: '#FF8A65',
  variant: 'Linear',
}
const Context = createContext<{
  state: IconState
  dispatch: Dispatch<IconAction>
}>({
  state: initialValue,
  dispatch: () => undefined,
})
export const useIconContext = () => useContext(Context)

const IconContext: FC = ({ children }) => {
  const [state, dispatch] = useReducer(IconReducer, initialValue)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default IconContext
