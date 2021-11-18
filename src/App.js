import './App.css'
import SignIn from './pages/SignIn/SignIn'
import Home from './Home'
import AddUser from './AddUser'
import Error from './Error'
import Dashboard from './pages/Dashboard/Dashboard'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
