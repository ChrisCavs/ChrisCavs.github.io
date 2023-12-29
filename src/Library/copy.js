import React from 'react'
import styled from 'styled-components'

import { getThemeProp } from './utils'
import Spacer from './spacer'

const SectionTitle = ({ title, num }) => (
    <TitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <Spacer width="10px" />
        <StyledNum>{num}</StyledNum>
    </TitleContainer>
)

const TitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

const StyledTitle = styled.h2`
    display: inline;
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    line-height: 22px;
    color: ${getThemeProp('text')};
`

const StyledNum = styled.span`
    margin-top: 2.2px;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: ${getThemeProp('text')};
`

const PageTitle = styled.h1`
    margin: 0;
    font-size: 26px;
    font-weight: 500;
    line-height: 31.15px;
    color: ${getThemeProp('text')};
`

const PageSubtitle = styled.p`
    margin: 0;
    font-size: 18px;
    line-height: 31.15px;
    color: ${getThemeProp('text')};
`

export {
    SectionTitle,
    PageTitle,
    PageSubtitle,
}