import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import jump from 'jump.js'

import { LargeText, XSmallText } from './copy'
import StyledIcon from './icon'
import Spacer from './spacer'

const NavLink = ({ children, target }) => {
  const { isDesktop } = useContext(ThemeContext)
  const content = isDesktop
    ? `[ ${children} ]`
    : children
  return (
    <XSmallText
      style={{cursor: 'pointer'}}
      onClick={() => jump(target)}
    >
      {content}
    </XSmallText>
  )
}

const ContactLink = ({ href, text, Icon, isFooter }) => {
  return (
    <ContactContainer href={href} target="_blank">
      <StyledIcon
        Icon={Icon}
        type={isFooter ? "contactFooter" : "contact"}
      />
      <Spacer width="9.5px" deskWidth="14.5px" />
      <LargeText>{text}</LargeText>
    </ContactContainer>
  )
}

const ContactContainer = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
`

export {
  NavLink,
  ContactLink,
}