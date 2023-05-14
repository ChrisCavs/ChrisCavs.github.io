import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage/Homepage'
import Projects from './Components/Projects'
import OpenSource from './Components/OpenSource'
import Contact from './Components/Contact'

export const MobileContext = createContext(null)

function App() {
  return (
    <MobileContext.Provider value={window.innerWidth <= 768}>
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
