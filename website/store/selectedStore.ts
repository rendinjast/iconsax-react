import { IIconsArray } from '../lib/icons'
import create from 'zustand'

interface SelectedState {
  selected: IIconsArray | null
  showIcon: (Icon: IIconsArray) => void
  hideIcon: () => void
}

export const selectedStore = create<SelectedState>((set) => ({
  selected: null,
  showIcon: (Icon) => set({ selected: Icon }),
  hideIcon: () => set({ selected: null }),
}))
