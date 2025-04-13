import * as Icons from 'iconsax-reactjs'
import { Icon } from 'iconsax-reactjs'

type iconType = keyof typeof Icons

export interface IIconsArray {
  name: string
  Icon: Icon
}
const iconsArray: IIconsArray[] = []
for (const [name, Icon] of Object.entries(Icons)) {
  iconsArray.push({ name, Icon })
}

export default iconsArray
