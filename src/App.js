import React, { createContext, useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'

export const MobileContext = createContext(null)

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  return (
    <MobileContext.Provider value={width <= 768}>
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </MobileContext.Provider>
  );
}

export default App;
