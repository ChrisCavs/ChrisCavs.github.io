import React from 'react'
import styled from 'styled-components'

import { iconMap, getThemeProp } from './utils'

const Block = ({icon, text}) => {
    const Icon = iconMap[icon]
    return (
        <StyledBlock>
            <IconWrapper>
                <Icon fill="currentColor" stroke="currentColor" />
            </IconWrapper>
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
    font-weight: 500;
    line-height: 14.4px;
    border-radius: 14px;
    color: ${getThemeProp('text')};
    background-color: ${getThemeProp('secondary')};
`

const IconWrapper = styled.div`
    width: 14px;
    height: 10.4px;
    margin-right: 10px;
    margin-left: 15px;
`

export default Block