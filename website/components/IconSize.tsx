import { ArrowDown2 } from 'iconsax-reactjs'
import { useRef, useState } from 'react'
import { useIconContext } from '../store'
import { Selector } from '.'

const options = [12, 16, 24, 32, 44, 60, 80]

export const IconSize = () => {
  const { state, dispatch } = useIconContext()

  const onChange = (op: number) => {
    dispatch({ type: 'CHANGE_SIZE', payload: op })
  }
  return (
    <Selector
      options={options}
      onChange={onChange}
      label="size"
      value={state.size}
    />
  )
}
