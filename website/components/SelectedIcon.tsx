import { ReactElement, useEffect, useRef, useState } from 'react'
import { renderToString } from 'react-dom/server'
import { saveAs } from 'file-saver'
import copy from 'copy-to-clipboard'
import canvg from 'canvg'
import gsap from 'gsap'
import { ClipboardText, CloseCircle, Import } from 'iconsax-reactjs'
import { useOnClickOutside } from '../hooks'
import { selectedStore, useIconContext } from '../store'

const duration = 300
export const SelectedIcon = () => {
  const { state } = useIconContext()
  const hideIcon = selectedStore((state) => state.hideIcon)
  const selected = selectedStore((state) => state.selected)
  const [isOpen, setIsOpen] = useState<boolean>(!!selected || false)
  const ref = useRef(null)
  const iconRef = useRef<SVGSVGElement>(null)

  const Icon = selected?.Icon

  useEffect(() => {
    if (isOpen) {
      gsap.to(ref.current, {
        y: '0',
        ease: 'expo.inOUt',
        duration: duration / 1000,
      })
    }
  }, [isOpen])
  useEffect(() => {
    setIsOpen(!!selected)
  }, [selected])

  useOnClickOutside(ref, (e) => {
    const path = e.composedPath() as HTMLElement[]
    let isAnIcon = false

    for (let p = 0; p < path.length; p++) {
      if (path[p].classList && path[p].classList.contains('icon')) {
        return (isAnIcon = true)
      }
    }
    if (!isAnIcon) handleClose()
  })

  const handleClose = () => {
    if (!hideIcon) return
    gsap.to(ref.current, {
      y: '500',
      ease: 'expo.inOUt',
      duration: duration / 1000,
    })
    setTimeout(() => {
      hideIcon()
    }, duration)
  }
  const iconSaveName = `${selected?.name}-${state.variant}-${state.size}px`

  const iconString =
    Icon &&
    renderToString(
      <Icon size={state.size} color={state.color} variant={state.variant} />
    )

  const handleCopySvg = () => {
    if (!iconString) return

    copy(iconString)
  }
  const handleDownloadSvg = () => {
    if (!iconString) return
    const blob = new Blob([iconString])
    saveAs(blob, `${iconSaveName}.svg`)
  }
  const handleDownloadPng = async () => {
    if (!iconString) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const v = canvg.fromString(ctx, iconString)
    v.render()
    const img = canvas.toDataURL('image/png')
    console.log(img)
    saveAs(img, `${iconSaveName}.png`)
  }
  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          className="fixed bg-bg p-3 h-72 md:w-96 mx-4 left-0 md:left-auto right-0 bottom-0 rounded-t-3xl border-2 translate-y-[500px] border-border"
        >
          <div className="flex justify-between items-center">
            <span className="font-bold text-md">{selected?.name}</span>
            <span className="cursor-pointer" onClick={handleClose}>
              <CloseCircle color="white" />
            </span>
          </div>
          <div className="flex gap-1 mt-3">
            <div className="flex-1 border-dashed border-2 p-4 border-border rounded-lg">
              {Icon && (
                <Icon size={64} color={state.color} variant={state.variant} />
              )}
            </div>
            <div className="flex-[7] flex flex-col gap-1 text-xs">
              <Button handleClick={handleCopySvg} name="copy#svg" />
              <div className="flex-1 grid grid-cols-2 gap-1">
                <Button handleClick={handleDownloadSvg} name="download#svg" />
                <Button handleClick={handleDownloadPng} name="download#png" />
              </div>
            </div>
          </div>
          <Code name={selected?.name!} />
        </div>
      )}
    </>
  )
}

interface ICode {
  name: string
}
const prop = (name: string, value: string | number) => [
  {
    text: ` ${name}`,
    class: 'text-purple-400',
  },
  {
    text: '=',
    class: 'text-gray-200',
  },
  {
    text: `"${value}"`,
    class: 'text-green-400',
  },
]
const Code = ({ name }: ICode) => {
  const code = useRef<ReactElement>(null)
  const { state } = useIconContext()
  const [copied, setCopied] = useState(false)

  const VariantProp =
    state.variant !== 'Linear' ? prop('variant', state.variant!) : []
  const SizeProp = state.size !== 24 ? prop('size', state.size!) : []

  const snip = [
    {
      text: '<',
      class: 'text-blue-300',
    },
    {
      text: `${name}`,
      class: 'text-yellow-400',
    },
    ...SizeProp,
    ...prop('color', state.color!),
    ...VariantProp,
    {
      text: '/>',
      class: 'text-blue-300',
    },
  ]
  const handleClick = () => {
    const res = snip.map((s) => s.text)
    copy(res.join(''))
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)

    // navigator.clipboard.writeText(res.join(''))
  }
  return (
    <div className="relative bg-card border-2 border-border rounded-lg mt-3 py-3 px-2 text-xs">
      <div
        onClick={() => handleClick()}
        className={`absolute bottom-2 right-2 ${
          copied ? 'bg-[#37d67a]' : 'bg-primary'
        } text-bg font-bold text-xs rounded-lg p-1  cursor-pointer`}
      >
        {copied ? 'copied!' : 'copy'}
      </div>
      <pre className="">
        {snip.map((s, i) => (
          <span className={s.class} key={i}>
            {`${s.text}${s.class.match(/-(green|yellow)-/) ? '\n' : ''}`}
          </span>
        ))}
      </pre>
    </div>
  )
}

interface IButton {
  name: string
  handleClick: () => void
}
const Button = ({ name: _name, handleClick }: IButton) => {
  const { state } = useIconContext()
  const [copied, setCopied] = useState(false)
  const name = _name.split('#')
  const Icon = name[0] === 'download' ? Import : ClipboardText
  const onClickHandler = () => {
    if (name[0] === 'copy') {
      console.log('erfan khadivar hastam ')
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    }

    handleClick()
  }

  return (
    <button
      onClick={onClickHandler}
      className="flex-1 flex items-center justify-center gap-1 border-2 border-border active:border-primary transition-all  rounded-lg"
    >
      <Icon color={copied ? '#37d67a' : '#FF8A65'} variant="Bulk" size="22" />
      <span>{copied ? 'copied!' : name[1]}</span>
    </button>
  )
}
