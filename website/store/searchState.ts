import create from 'zustand'

interface Search {
  query: string
  setQuery: (query: string) => void
}

export const searchStore = create<Search>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}))
