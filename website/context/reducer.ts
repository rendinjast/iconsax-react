import { AppState, VariantType } from './AppContext'

export type AppAction =
  | { type: 'SEARCH'; payload: string }
  | { type: 'CHANGE_VARIANT'; payload: VariantType }
  | { type: 'CHANGE_SIZE'; payload: number }
  | { type: 'CHANGE_COLOR'; payload: string }

const AppReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, search: action.payload }
    case 'CHANGE_VARIANT':
      return { ...state, variant: action.payload }
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload }
    case 'CHANGE_SIZE':
      return { ...state, size: action.payload }

    default:
      return state
  }
}

export default AppReducer
