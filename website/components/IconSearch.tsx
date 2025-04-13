import { SearchNormal } from 'iconsax-reactjs'
import React, { useState, useCallback } from 'react'
import { useDebounce } from '../hooks'
import { searchStore } from '../store'

export const IconSearch = () => {
  // const { SetQuery } = useSearchContext()
  const SetQuery = searchStore((state) => state.setQuery)
  const [search, setSearch] = useState('')
  const onChangeInput = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  useDebounce(() => SetQuery(search), 300, [search])
  return (
    <div className="h-10 bg-card rounded-xl flex items-center px-3">
      <SearchNormal size={18} color="#eee" />
      <input
        className="bg-transparent px-2 py-2 w-24 sm:w-40"
        value={search}
        onChange={onChangeInput}
        placeholder="search icons..."
        type="text"
      />
    </div>
  )
}
