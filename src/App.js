import React, { createContext, useEffect, useState } from 'react'
import Header from './Components/Header'
import styled from 'styled-components'

export const MobileContext = createContext(null)
export const ThemeContext = createContext(null)

const darkTheme = {
  background: '#191A1C',
  secondary: '#28292B',
  tertiary: '#75FB69',
  text: '#F3F1EF',
}

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [theme] = useState(darkTheme)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <MobileContext.Provider value={width <= 768}>
      <ThemeContext.Provider value={theme}>
        <AppContainer theme={theme}>
          <AppContainerInner>
            <Header />
          </AppContainerInner>
        </AppContainer>
      </ThemeContext.Provider>
    </MobileContext.Provider>
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
