import './App.css'
import DashBoard from './pages/Dashboard/Dashboard'
import SignIn from './pages/SignIn/SignIn'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  )
}

export default App
