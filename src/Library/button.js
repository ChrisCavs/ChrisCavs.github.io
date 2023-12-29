import React from 'react'
import styled from 'styled-components'

import { iconMap, getThemeProp } from './utils'
import Spacer from './spacer'
import StyledIcon from './icon'

const Star = iconMap['Star']

const StyledButton = ({ href, children }) => (
    <PrimaryButtonContainer href={href} target="_blank">
        {children}
    </PrimaryButtonContainer>
)

const StarButton = ({ href, children }) => (
    <SecondaryButtonContainer href={href} target="_blank">
        <StyledIcon Icon={Star} type="star" />
        <Spacer width="4px" />
        {children}
    </SecondaryButtonContainer>
)

const baseButtonStyles = `
    display: inline-block;
    padding: 7px 10px;
    font-size: 11px;
    font-weight: 500;
    line-height: 10.8px;
    letter-spacing: 0.8px;
    border-radius: 18px;
    border-style: unset;
    text-decoration: none;
    cursor: pointer;
`

const PrimaryButtonContainer = styled.a`
    ${baseButtonStyles}
    color: ${getThemeProp('background')};
    background-color: ${getThemeProp('text')};
`

const SecondaryButtonContainer = styled.a`
    ${baseButtonStyles}
    color: ${getThemeProp('text')};
    border: 1px solid ${getThemeProp('text') };
    background-color: ${getThemeProp('background')};
`

export { StyledButton, StarButton }