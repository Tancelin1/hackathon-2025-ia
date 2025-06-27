import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ImageGeneratorPage from './pages/ImageGeneratorPage'
import QuizPage from './pages/QuizPage'
import FinalStatsPage from './pages/FinalStatsPage'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [sessionData, setSessionData] = useState({
    co2Emitted: 0,
    imagesGenerated: 0,
    startTime: Date.now()
  })

  const pages = [
    <HomePage onNext={() => setCurrentPage(1)} />,
    <ImageGeneratorPage 
      onNext={() => setCurrentPage(2)} 
      sessionData={sessionData}
      setSessionData={setSessionData}
    />,
    <QuizPage onNext={() => setCurrentPage(3)} />,
    <FinalStatsPage sessionData={sessionData} onRestart={() => {
      setCurrentPage(0)
      setSessionData({ co2Emitted: 0, imagesGenerated: 0, startTime: Date.now() })
    }} />
  ]

  return (
    <div className="app">
      {pages[currentPage]}
    </div>
  )
}

export default App
