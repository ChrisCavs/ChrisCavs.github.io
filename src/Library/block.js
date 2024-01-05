import React from 'react'
import styled from 'styled-components'

import { iconMap, getThemeProp, ifDesktop, ifBigDesktop, useInViewOnce, translateAnimation } from './utils'
import { SmallText } from './copy'
import StyledIcon from './icon'
import Spacer from './spacer'

const Block = ({ icon, text }) => {
  const { ref, inView } = useInViewOnce()
  const Icon = iconMap[icon]
  return (
    <StyledBlock ref={ref} $inView={inView}>
      <StyledIcon Icon={Icon} type="block" />
      <Spacer width="10px" deskWidth="18px" />
      <SmallText>{text}</SmallText>
    </StyledBlock>
  )
}

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47.5px;
  padding: 0 15px;
  margin-bottom: 7.38px;
  border-radius: 14px;
  box-sizing: border-box;
  background-color: ${getThemeProp('secondary')};
  ${translateAnimation()}

  ${ifDesktop(`
    width: 49.3%;
    margin-bottom: 10px;
  `)}

  ${ifBigDesktop(`
    height: 84.54px;
    padding: 0 28px;
    border-radius: 25px;
  `)}
`

export default Block