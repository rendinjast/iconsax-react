import { IconState, VariantType } from './IconContext'

export type IconAction =
  | { type: 'SEARCH'; payload: string }
  | { type: 'CHANGE_VARIANT'; payload: VariantType }
  | { type: 'CHANGE_SIZE'; payload: number }
  | { type: 'CHANGE_COLOR'; payload: string }

const IconReducer = (state: IconState, action: IconAction) => {
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

export default IconReducer
