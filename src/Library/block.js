import React from 'react'
import styled from 'styled-components'

import { iconMap, getThemeProp } from './utils'
import StyledIcon from './icon'

const Block = ({icon, text}) => {
    const Icon = iconMap[icon]
    return (
        <StyledBlock>
            <StyledIcon Icon={Icon} type="block" />
            <div>{text}</div>
        </StyledBlock>
    )
}

const StyledBlock = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 47.5px;
    font-size: 11px;
    line-height: 14.4px;
    border-radius: 14px;
    color: ${getThemeProp('text')};
    background-color: ${getThemeProp('secondary')};
`

export default Block