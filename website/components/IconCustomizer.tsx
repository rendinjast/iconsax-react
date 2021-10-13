import iconsMeta from 'iconsax-react/dist/metaData.json'
import { useCallback, useState } from 'react'
import { ColorPicker, IconSizeChanger, SelectedIcon } from '.'
import { useAppContext, Variants } from '../context/AppContext'
import { useDebounce } from '../hooks'

const Input = () => {
  const { dispatch } = useAppContext()
  const [search, setSearch] = useState('')
  const onChangeInput = useCallback(
    (e) => {
      setSearch(e.target.value)
    },
    [search]
  )

  useDebounce(() => dispatch({ type: 'SEARCH', payload: search }), 800, [
    search,
  ])
  return (
    <input
      className="border bg-transparent border-border rounded-full px-2 py-2 w-20 sm:w-40"
      value={search}
      onChange={onChangeInput}
      placeholder="search icons..."
      type="text"
    />
  )
}

export const IconCustomizer = () => {
  const { state, dispatch } = useAppContext()

  return (
    <div className="fixed bottom-10  left-0 md:left-auto right-0 text-xs font-light flex justify-center items-center md:justify-end z-10">
      <div className="relative bg-bg rounded-full shadow-primary p-2  inline-flex gap-2 justify-between md:mr-4 items-center border-2 border-border">
        <SelectedIcon />
        <Input />
        <IconSizeChanger />
        <div className="rounded-full border border-border overflow-hidden flex">
          {Variants.map((variant) => (
            <span
              onClick={() =>
                dispatch({ type: 'CHANGE_VARIANT', payload: variant })
              }
              className={`py-2 px-1 xs:px-2 cursor-pointer ${
                state.variant === variant && 'bg-primary text-white'
              }`}
              key={variant}
            >
              {variant}
            </span>
          ))}
        </div>
        <div className="flex-col gap-1 mr-2  hidden xs:flex">
          <ColorPicker />
        </div>
      </div>
    </div>
  )
}
