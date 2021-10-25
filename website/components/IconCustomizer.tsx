import { IconColor, IconSearch, IconSize, IconVariant } from '.'

export const IconCustomizer = () => {
  return (
    <div className="toolbar w-full text-xs md:text-sm font-light flex flex-col justify-center items-center md:justify-end z-10">
      <div className="w-full md:container bg-bg m-auto p-2 sm:p-4 flex gap-2  sm:gap-6 justify-center items-center">
        <IconSearch />
        <IconSize />
        <IconVariant />
        <IconColor />
      </div>
      <div className="w-full h-6 bg-gradient-to-b from-bg to-transparent"></div>
    </div>
  )
}
