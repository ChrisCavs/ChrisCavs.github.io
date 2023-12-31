import React, { createContext, useEffect, useState } from 'react'
import Header from './Components/Header'
import styled, { ThemeProvider } from 'styled-components'

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
  }

  return (
    <ThemeProvider theme={theme}>
        <AppContainer>
          <AppContainerInner>
            <Header />
          </AppContainerInner>
        </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`

const AppContainerInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export default App
