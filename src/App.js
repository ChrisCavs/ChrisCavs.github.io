import React, { createContext, useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'

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

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <MobileContext.Provider value={width <= 768}>
      <ThemeContext.Provider value={darkTheme}>
        <div className="App">
          <Header />
          <Homepage />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </MobileContext.Provider>
  );
}

export default App
