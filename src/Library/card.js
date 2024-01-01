import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

import { StarButton, StyledButton } from "./button"
import { getThemeProp, ifDesktop } from "./utils"
import Spacer from "./spacer"
import { MediumText, XLargeText } from "./copy"

const Card = ({ title, subtitle, stars, gitLink, demoLink }) => {
    const { isDesktop } = useContext(ThemeContext)
    return (
        <CardContainer>
            <CardTitleContainer>
                <ThemeDot />
                <Spacer width="10px" deskWidth="15px" />
                <XLargeText>{title}</XLargeText>
            </CardTitleContainer>
            <Spacer height="20px" deskHeight="30px" />
            <MediumText>{subtitle}</MediumText>
            <Spacer height="50px" deskHeight="70px" />
            <ButtonContainer>
                <div>
                    <StyledButton href={gitLink}>GitHub</StyledButton>
                    <Spacer width="5px" />
                    <StyledButton href={demoLink}>Demo</StyledButton>
                </div>
                <StarButton href={gitLink}>{stars}</StarButton>
            </ButtonContainer>
        </CardContainer>
    )
}

const ImageCard = ({ title, subtitle, gitLink, src, alt }) => {
    const { isDesktop } = useContext(ThemeContext)
    return (
        <CardContainer>
            <CardTitleContainer>
                <ThemeDot />
                <Spacer width="10px" deskWidth="15px" />
                <XLargeText>{title}</XLargeText>
            </CardTitleContainer>
            <Spacer height="20px" deskHeight="30px" />
            <MediumText style={{ width: '60%' }}>{subtitle}</MediumText>
            <Spacer height="20px" deskHeight="30px" />
            <StyledButton href={gitLink}>GitHub</StyledButton>
            <Spacer height="29px" deskHeight="48px" />
            <ImageCardImage src={src} alt={alt} />
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 16.85px;
    box-sizing: border-box;
    background-color: ${getThemeProp('secondary')};

    ${ifDesktop(`
        width: 625px;
        padding: 30px;
        border-radius: 25px;
    `)}
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardTitleContainer = styled.div`
    display: flex;
    align-items: center;
`

const ImageCardImage = styled.img`
    width: 100%;
    border-radius: 5.65px;

    ${ifDesktop(`
        border-radius: 12.5px;
    `)}
`

const ThemeDot = styled.span`
    width: 8.68px;
    height: 8.68px;
    border-radius: 50%;
    background-color: ${getThemeProp('tertiary')};

    ${ifDesktop(`
        width: 12.88px;
        height: 12.88px;
    `)}
`

export {
    Card,
    ImageCard,
}