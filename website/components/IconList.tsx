import iconsMeta from 'iconsax-react/dist/meta-data.json'
import { IconCategory } from '.'

export const IconList = () => {
  return (
    <div className="w-full py-10">
      {iconsMeta.categories.map((cat) => (
        <IconCategory key={cat.name} name={cat.name} icons={cat.icons} />
      ))}
    </div>
  )
}
