import HomePage from './page/HomePage'
import { FaArrowCircleUp } from 'react-icons/fa'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Navigate
} from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div>
      <Router>
        {/* <Header></Header> */}
        <>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </>
      </Router>
      <div className='scrollTop'>
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}
        />
      </div>
    </div>
  )
}

export default App
