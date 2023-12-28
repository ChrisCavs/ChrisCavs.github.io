import React from 'react'
import styled from 'styled-components'

import { iconMap, getThemeProp } from './utils'

const Star = iconMap['Star']

const StyledButton = ({ onClick, children }) => (
    <PrimaryButtonContainer onClick={onClick}>
        {children}
    </PrimaryButtonContainer>
)

const StarButton = ({ onClick, children }) => (
    <SecondaryButtonContainer onClick={onClick}>
        <IconWrapper>
            <Star fill="currentColor" stroke="currentColor" />
        </IconWrapper>
        {children}
    </SecondaryButtonContainer>
)

const baseButtonStyles = `
    padding: 7px 9px;
    font-size: 11px;
    font-weight: 500;
    line-height: 11px;
    letter-spacing: 0.8px;
    border-radius: 18px;
    border-style: unset;
    cursor: pointer;
`

const PrimaryButtonContainer = styled.button`
    ${baseButtonStyles}
    color: ${getThemeProp('background')};
    background-color: ${getThemeProp('text')};
`

const SecondaryButtonContainer = styled.button`
    ${baseButtonStyles}
    display: flex;
    color: ${getThemeProp('text')};
    border: 1px solid ${getThemeProp('text') };
    background-color: ${getThemeProp('background')};
`

const IconWrapper = styled.div`
    width: 10px;
    height: 10px;
    margin-right: 4px;
`

export { StyledButton, StarButton }