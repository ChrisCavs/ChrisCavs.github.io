import React from 'react'
import styled from 'styled-components'

import { getIsDesktop, getThemeProp, ifDesktop } from './utils'
import Spacer from './spacer'
import { getByTestId } from '@testing-library/react'

const SectionTitle = ({ title, num }) => (
    <SectionTitleContainer>
        <StyledSectionTitle>{title}</StyledSectionTitle>
        <Spacer width="10px" />
        <StyledSectionNum>{num}</StyledSectionNum>
    </SectionTitleContainer>
)

const SectionTitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

const StyledSectionTitle = styled.h2`
    margin: 0;
    display: inline;
    font-size: 22px;
    font-weight: 500;
    line-height: 22px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 29.56px;
        line-height: 35.47px;
    `)}
`

const StyledSectionNum = styled.span`
    margin: 0;
    margin-top: 2.2px;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        margin-top: 5px;
        font-size: 12px;
        line-height: 14.4px;
    `)}
`

const PageTitle = styled.h1`
    margin: 0;
    font-size: 25.96px;
    font-weight: 500;
    line-height: 31.15px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 49px;
        line-height: 55.2px;
    `)}
`

const PageSubtitle = styled.p`
    margin: 0;
    font-size: 18px;
    line-height: 24.69px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 25px;
        line-height: 31px;
    `)}
`

const XLargeText = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 16.18px;
    letter-spacing: 0.75px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 24px;
        line-height: 24px;
    `)}
`

const LargeText = styled.p`
    margin: 0;
    font-size: 13.93px;
    line-height: 16.72px;
    letter-spacing: 0.22px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 17.79px;
        line-height: 21.35px;
    `)}
`

const MediumText = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 16.18px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 19px;
        line-height: 24px;
    `)}
`

const SmallText = styled.p`
    margin: 0;
    font-size: 11px;
    line-height: 13px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 19px;
        line-height: 24px;
    `)}
`

const XSmallText = styled.p`
    margin: 0;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.22px;
    color: ${getThemeProp('text')};

    ${ifDesktop(`
        font-size: 14px;
        line-height: 16.8px;
    `)}
`

export {
    SectionTitle,
    PageTitle,
    PageSubtitle,
    XLargeText,
    LargeText,
    MediumText,
    SmallText,
    XSmallText,
}