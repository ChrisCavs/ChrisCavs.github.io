import React, { useContext } from 'react';
import styled from 'styled-components';

import { ReactComponent as Star } from '../Icons/star.svg'

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

const buttonBaseStyles = `
    padding: 12px 14px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 2.8px;
    border-radius: 18px;
    border-style: unset;
    cursor: pointer;
`

const PrimaryButtonContainer = styled.button`
    ${buttonBaseStyles}
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.text};
`

const SecondaryButtonContainer = styled.button`
    ${buttonBaseStyles}
    display: flex;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
`

const IconWrapper = styled.div`
    width: 14px;
    height: 10.4px;
    margin-right: 4px;
`

export { StyledButton, StarButton }