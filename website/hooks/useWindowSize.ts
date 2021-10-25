import { useEffect, useState } from 'react'

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set size at the first client-side load
    handler()

    window.addEventListener('resize', handler)

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return windowSize
}
