import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage/Homepage'
import Projects from './Components/Projects'
import OpenSource from './Components/OpenSource'
import Contact from './Components/Contact'

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
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </MobileContext.Provider>
  );
}

export default App;
