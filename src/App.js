import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { getThemeProp, ifDesktop } from './Library/utils'

import Header from './Components/Header'
import About from './Components/About'
import Bio from './Components/Bio'
import Spacer from './Library/spacer'

const darkTheme = {
  background: '#191A1C',
  secondary: '#28292B',
  tertiary: '#75FB69',
  text: '#F3F1EF',
}

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const theme = {
    ...darkTheme,
    isDesktop: width >= 768,
    isBigDesktop: width >= 1150,
  }

  return (
    <ThemeProvider theme={theme}>
        <AppContainer>
          <AppContainerInner>
            <Header />
            <Spacer height="48px" deskHeight="109px" />
            <Bio />
            <Spacer height="35px" deskHeight="107px" />
            <About />
          </AppContainerInner>
        </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  width: 100%;
  background-color: ${getThemeProp('background')};
`

const AppContainerInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  ${ifDesktop(`
    padding: 0 69px;
  `)}
`

export default App
