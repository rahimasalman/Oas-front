import './App.css'
import SignIn from './pages/SignIn/SignIn'
import Home from './Home'
import AddUser from './AddUser'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    const tokenUser = localStorage.getItem('tokenUser');
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {tokenUser && <Route exact path="/dashboard" element={<Dashboard />}/>}
          {tokenAdmin && <Route exact path="/home" element={<Home />}/>}
          <Route exact path="/add" element={<AddUser />} />
          <Route exact path="*" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
