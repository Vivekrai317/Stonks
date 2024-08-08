import { useState } from 'react'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Card } from './components/Card'
import { Home } from './components/Home'
import { AllNews } from './components/AllNews'
import { CountryNews } from './components/CountryNews'
import LandingPage from './components/LandingPage'
import { Trending } from './components/Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/local-news" element={<Home />} />
          <Route path="/top-headlines" element={<AllNews />} />
          <Route path="/country-headlines/:iso" element={<CountryNews />} />
          <Route path="/trending" element={<Trending/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
