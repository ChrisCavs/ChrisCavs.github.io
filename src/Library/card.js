import React from "react"
import styled from "styled-components"

import { StarButton, StyledButton } from "./button"
import { getThemeProp } from "./utils"
import Spacer from "./spacer"

const Card = ({ title, subtitle, stars, gitLink, demoLink }) => {
    return (
        <CardContainer>
            <CardTitleContainer>
                <ThemeDot />
                <Spacer width="10px" />
                <CardTitle>{title}</CardTitle>
            </CardTitleContainer>
            <CardSubtitle>{subtitle}</CardSubtitle>
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
    return (
        <CardContainer>
            <CardTitleContainer>
                <ThemeDot />
                <Spacer width="10px" />
                <CardTitle>{title}</CardTitle>
            </CardTitleContainer>
            <ImageCardSubtitle>{subtitle}</ImageCardSubtitle>
            <StyledButton href={gitLink}>GitHub</StyledButton>
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
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardTitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    line-height: 16.18px;
`

const CardTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.75px;
    color: ${getThemeProp('text')};
`

const CardSubtitle = styled.span`
    display: block;
    margin-bottom: 50px;
    font-size: 12px;
    line-height: 16.18px;
    color: ${getThemeProp('text')};
`

const ImageCardSubtitle = styled(CardSubtitle)`
    width: 60%;
    margin-bottom: 20px;
`

const ImageCardImage = styled.img`
    width: 100%;
    margin-top: 29px;
    border-radius: 5.65px;
`

const ThemeDot = styled.span`
    width: 8.68px;
    height: 8.68px;
    border-radius: 50%;
    background-color: ${getThemeProp('tertiary')};
`

export {
    Card,
    ImageCard,
}