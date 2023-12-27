import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';

import { ReactComponent as ArrowUp } from '../Icons/arrowUp.svg'
import { ReactComponent as Bug } from '../Icons/bug.svg'
import { ReactComponent as Check } from '../Icons/check.svg'
import { ReactComponent as Eye } from '../Icons/eye.svg'
import { ReactComponent as Gear } from '../Icons/gear.svg'
import { ReactComponent as Person } from '../Icons/person.svg'
import { ReactComponent as Js } from '../Icons/js.svg'
import { ReactComponent as Question } from '../Icons/question.svg'

const iconMap = {
    Eye,
    ArrowUp,
    Bug,
    Check,
    Gear,
    Person,
    Js,
    Question,
}

const Block = (props) => {
    const theme = useContext(ThemeContext)
    const Icon = iconMap[props.icon]
    return (
        <StyledBlock theme={theme}>
            <IconWrapper>
                <Icon fill="currentColor" stroke="currentColor" />
            </IconWrapper>
            <div>{props.text}</div>
        </StyledBlock>
    )
}

const StyledBlock = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 47.5px;
    border-radius: 14px;
    font-size: 11px;
    font-weight: 500;
    line-height: 14.4px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.secondary};
`

const IconWrapper = styled.div`
    width: 14px;
    height: 10.4px;
    margin-right: 10px;
    margin-left: 15px;
`

export default Block