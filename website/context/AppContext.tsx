import { createContext, useContext, Dispatch, FC, useReducer } from 'react'
import AppReducer, { AppAction } from './reducer'

export const Variants = [
  'Linear',
  'Outline',
  'Bold',
  'Bulk',
  'Broken',
  'TwoTone',
] as const
export type VariantType = typeof Variants[number] | undefined

export interface AppState {
  search: string
  size: number
  color: string
  variant: VariantType
}

const initialValue: AppState = {
  search: '',
  size: 32,
  color: '#c5c5c5',
  variant: 'TwoTone',
}
const Context = createContext<{
  state: AppState
  dispatch: Dispatch<AppAction>
}>({
  state: initialValue,
  dispatch: () => undefined,
})
export const useAppContext = () => useContext(Context)

const AppContext: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialValue)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default AppContext
