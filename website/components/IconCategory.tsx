import { useEffect, useState } from 'react'
import * as Icons from 'iconsax-react'
import { Icon } from '.'
import { useAppContext } from '../context/AppContext'

type icType = keyof typeof Icons
interface Props {
  name: string
  icons: icType[]
}
export const IconCategory = ({ name, icons }: Props) => {
  const { state } = useAppContext()
  const [filterd, setFilterd] = useState<icType[]>([])
  useEffect(() => {
    const res =
      icons.filter((x) =>
        x.toLowerCase().includes(state.search.toLowerCase())
      ) || []
    setFilterd(res)
  }, [state.search])
  useEffect(() => {
    console.log(filterd)
  }, [filterd])
  if (filterd.length < 1) {
    return null
  }
  return (
    <div className="relative my-10 flex flex-col justify-center items-center">
      <span className="w-full px-12 py-1 mb-2 border-b border-border">
        {name}
      </span>
      <div className="w-full grid grid-cols-icon justify-center gap-4 sm:gap-5">
        {filterd.length > 0 &&
          filterd.map((icon) => <Icon key={icon} icon={icon} />)}
      </div>
    </div>
  )
}
