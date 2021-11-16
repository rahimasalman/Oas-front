import './App.css'
import SignIn from './pages/SignIn/SignIn'
import Home from './Home'
import AddUser from './AddUser'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
          <Route exact path="/home" element={<Home />} />
        <Route exact path="/add" element={<AddUser />} />
      </Routes>
    </Router>
  )
}

export default App
