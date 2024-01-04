import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { getThemeProp, ifDesktop } from '../Library/utils'
import { NavLink } from '../Library/link';
import Spacer from '../Library/spacer'

const Header = () => {
  const { isDesktop } = useContext(ThemeContext)
  return (
    <>
      <Spacer height="29px" deskHeight="42px" />
      <HeaderContainer>
        <Logo>{"<C/C>"}</Logo>
        <NavContainer>
          {isDesktop && <NavLink target=".about">About</NavLink>}
          <Spacer width="20px" deskWidth="45px" />
          <NavLink target=".open-source">Open Source</NavLink>
          <Spacer width="20px" deskWidth="45px" />
          <NavLink target=".projects">Projects</NavLink>
          <Spacer width="20px" deskWidth="45px" />
          <NavLink target=".contact">Contact</NavLink>
        </NavContainer>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavContainer = styled.nav`
  display: flex;
`

const Logo = styled.div`
  font-size: 12px;
  line-height: 14.4px;
  letter-spacing: 2px;
  color: ${getThemeProp('text')};

  ${ifDesktop(`
    font-size: 17px;
    line-height: 20.4px;
  `)}
`

export default Header