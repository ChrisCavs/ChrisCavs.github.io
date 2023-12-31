import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { iconMap, getThemeProp, ifDesktop } from './utils'
import StyledIcon from './icon'
import { SmallText } from './copy'
import Spacer from './spacer'

const Block = ({icon, text}) => {
    const isDesktop = useContext(ThemeContext).isDesktop
    const Icon = iconMap[icon]
    return (
        <StyledBlock>
            <StyledIcon Icon={Icon} type="block" />
            <Spacer width={ isDesktop ? "18px" : "10px"} />
            <SmallText>{text}</SmallText>
        </StyledBlock>
    )
}

const StyledBlock = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 47.5px;
    padding: 0 15px;
    border-radius: 14px;
    box-sizing: border-box;
    background-color: ${getThemeProp('secondary')};

    ${ifDesktop(`
        width: 625px;
        height: 84.54px;
        padding: 0 28px;
        border-radius: 25px;
    `)}
`

export default Block