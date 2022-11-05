import HomePage from './page/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Navigate
} from 'react-router-dom'
function App() {
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
    </div>
  )
}

export default App
