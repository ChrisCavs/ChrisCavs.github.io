import React from 'react'
import styled from 'styled-components'

import { getThemeProp, ifDesktop, translateAnimation, useInViewOnce } from './utils'
import { StarButton, StyledButton } from './button'
import { MediumText, XLargeText } from './copy'
import Spacer from './spacer'

const Card = ({ title, subtitle, stars, gitLink, demoLink }) => {
  const { ref, inView } = useInViewOnce()
  return (
    <CardContainer ref={ref} $inView={inView}>
      <CardTitleContainer>
        <ThemeDot />
        <Spacer width="11px" deskWidth="17px" />
        <XLargeText>{title}</XLargeText>
      </CardTitleContainer>
      <Spacer height="20px" deskHeight="30px" />
      <MediumText>{subtitle}</MediumText>
      <Spacer height="50px" deskHeight="70px" />
      <ButtonContainer>
        <div>
          <StyledButton href={gitLink}>GitHub</StyledButton>
          <Spacer width="5px" deskWidth="8px" />
          <StyledButton href={demoLink}>Demo</StyledButton>
        </div>
        <StarButton href={gitLink}>{stars}</StarButton>
      </ButtonContainer>
    </CardContainer>
  )
}

const ImageCard = ({ title, subtitle1, subtitle2, gitLink, src, alt }) => {
  const { ref, inView } = useInViewOnce()
  return (
    <CardContainer ref={ref} $inView={inView}>
      <CardTitleContainer>
        <ThemeDot />
        <Spacer width="10px" deskWidth="15px" />
        <XLargeText>{title}</XLargeText>
      </CardTitleContainer>
      <Spacer height="20px" deskHeight="30px" />
      <MediumText>{subtitle1}</MediumText>
      <MediumText>{subtitle2}</MediumText>
      <Spacer height="20px" deskHeight="30px" />
      <StyledButton href={gitLink}>GitHub</StyledButton>
      <Spacer height="29px" deskHeight="48px" />
      <ImageCardImage src={src} alt={alt} />
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 16.85px;
  box-sizing: border-box;
  background-color: ${getThemeProp('secondary')};
  ${translateAnimation()}

  ${ifDesktop(`
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

const CardArrangement = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;

  ${ifDesktop(`
    grid-template-columns: repeat(2, 1fr);
  `)}
`

export {
  Card,
  ImageCard,
  CardArrangement,
}