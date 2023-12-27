import React, { createContext, useEffect, useState } from 'react'
import Header from './Components/Header'
import styled, { ThemeProvider } from 'styled-components'

export const MobileContext = createContext(null)

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

  return (
    <ThemeProvider theme={darkTheme}>
      <MobileContext.Provider value={width <= 768}>
        <AppContainer>
          <AppContainerInner>
            <Header />
          </AppContainerInner>
        </AppContainer>
      </MobileContext.Provider>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`

const AppContainerInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export default App
