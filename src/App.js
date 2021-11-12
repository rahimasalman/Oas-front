import './App.css'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<SignUp/>} />
              <Route exact path="/signin" element={<SignIn/>} />
          </Routes>
      </Router>
  )
}

export default App
