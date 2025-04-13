import { useEffect, useState } from 'react'
import icons, { IIconsArray } from '../lib/icons'
import { IconItem } from '.'
import { searchStore } from '../store'
import { EmojiSad } from 'iconsax-reactjs'
import { AutoSizer, List, WindowScroller } from 'react-virtualized'

const Empty = () => {
  return (
    <div className="w-full flex gap-4 flex-col justify-start items-center">
      <span>
        <EmojiSad color="#FF8A65" variant="Bulk" size="90" />
      </span>
      <span>Nothing Found</span>
    </div>
  )
}
const ICON_CONTAINER_SIZE = 150

export const IconList = () => {
  const [filtered, setFiltered] = useState<IIconsArray[]>(icons)
  const [numColumns, setNumColumns] = useState(1)

  const query = searchStore((state) => state.query)

  const onResize = ({ width }: { width: number }) => {
    if (width <= 576) {
      setNumColumns(Math.floor(width / ICON_CONTAINER_SIZE))
    } else {
      setNumColumns(Math.floor(width / ICON_CONTAINER_SIZE))
    }
  }
  useEffect(() => {
    console.log(query)
    const f =
      icons.filter((x) =>
        x.name.toLowerCase().includes(query!.toLowerCase())
      ) || []
    setFiltered(f)
  }, [query])
  return (
    <div className="container flex justify-center m-auto min-h-[400px]">
      <div className="w-full relative mb-10">
        {filtered.length > 0 ? (
          <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <AutoSizer disableHeight onResize={onResize}>
                {({ width }) => (
                  <List
                    tabIndex={-1}
                    autoHeight
                    width={width}
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    rowCount={Math.ceil(filtered.length / numColumns)}
                    rowHeight={ICON_CONTAINER_SIZE + 10}
                    rowRenderer={({ key, index: rowIndex, style }) => (
                      <div
                        key={key}
                        className="grid place-items-center"
                        style={{
                          ...style,
                          gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                        }}
                      >
                        {Array.from(
                          { length: numColumns },
                          (_, columnIndex) => {
                            const icon =
                              filtered[rowIndex * numColumns + columnIndex]
                            if (!icon) {
                              return null
                            }
                            return (
                              <IconItem name={icon.name} Icon={icon.Icon} />
                            )
                          }
                        )}
                      </div>
                    )}
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  )
}
