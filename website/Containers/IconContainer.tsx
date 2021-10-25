import { IconCustomizer, IconList, SelectedIcon } from '../components'
import { IconContext } from '../store'

export const IconContainer = () => {
  return (
    <div className="relative mt-40 font-light">
      <IconContext>
        <IconCustomizer />
        <IconList />
        <SelectedIcon />
      </IconContext>
    </div>
  )
}
