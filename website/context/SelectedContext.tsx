import { useState, useMemo, createContext, FC, useContext } from 'react'
import * as Icons from 'iconsax-react'

type IconNameType = keyof typeof Icons | ''
type IconType = {
  name?: IconNameType
  visible?: boolean
}
interface SelectedState {
  icon?: IconType
  showIcon: (name: IconNameType) => void
  hideIcon: () => void
}

const initialState: SelectedState = {
  icon: {
    visible: false,
    name: '',
  },
  showIcon: () => {},
  hideIcon: () => {},
}

const Context = createContext(initialState)
export const useSelectedContext = () => useContext(Context)

const Selected: FC = ({ children }) => {
  const [icon, setIcon] = useState<IconType>()

  const value = useMemo(
    () => ({
      icon,
      showIcon: (name: IconNameType) =>
        setIcon(() => {
          return { visible: true, name }
        }),
      hideIcon: () =>
        setIcon(() => {
          return {
            visible: false,
            name: '',
          }
        }),
    }),
    [icon]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Selected
