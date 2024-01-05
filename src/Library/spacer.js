import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Spacer = ({ width, height, deskWidth, deskHeight }) => {
  const { isDesktop } = useContext(ThemeContext)
  return (
    <div style={{
      display: `${(width || deskWidth) ? 'inline-block' : 'block'}`,
      width: `${(isDesktop ? deskWidth : width) || '0px'}`,
      height: `${(isDesktop ? deskHeight : height) || '0px'}`
    }} />
  )
}

export default Spacer