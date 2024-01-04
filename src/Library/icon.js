import React from 'react'
import styled from 'styled-components'

import { getThemeProp, ifBigDesktop } from './utils'

const BlockIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 14px;
  height: 14px;
  color: ${getThemeProp('text')};

  ${ifBigDesktop(`
    width: 20px;
    height: 20px;
  `)}
`

const StarIconWrapper = styled.div`
  display: inline-block;
  width: 9.6px;
  height: 9.1px;
  color: ${getThemeProp('text')};

  ${ifBigDesktop(`
    width: 14.25px;
    height: 13.55px;
  `)}
`

const ContactIconWrapper = styled.div`
  display: flex;
  width: 27.16px;
  height: 27.16px;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 8.5px;
  color: ${getThemeProp('text')};
  border: 2px solid ${getThemeProp('line')};

  ${ifBigDesktop(`
    width: 34.69px;
    height: 34.69px;
    padding: 8px;
    border-radius: 10.88px;
  `)}
`

const ContactFooterIconWrapper = styled(ContactIconWrapper)`
  border: 2px solid ${getThemeProp('text')};
`

const wrapperMap = {
  block: BlockIconWrapper,
  star: StarIconWrapper,
  contact: ContactIconWrapper,
  contactFooter: ContactFooterIconWrapper,
}

const StyledIcon = ({ Icon, type }) => {
  const Wrapper = wrapperMap[type]
  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  )
}

export default StyledIcon