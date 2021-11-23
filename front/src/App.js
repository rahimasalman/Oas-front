import './App.css'
import React from 'react'
import SignIn from './pages/SignIn/SignIn'
import Home from './Home'
import AddUser from './AddUser'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories/Categories'
import Types from './pages/Types/Types'
import Orders from './pages/Orders/Orders'

function App() {
  const tokenAdmin = localStorage.getItem('tokenAdmin')
  const tokenUser = localStorage.getItem('tokenUser')
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {tokenUser && <Route exact path="/dashboard" element={<Dashboard />} />}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/types" element={<Types />} />
        <Route exact path="/orders" element={<Orders />} />
        {tokenAdmin && <Route exact path="/home" element={<Home />} />}
        <Route exact path="/add" element={<AddUser />} />
        {tokenAdmin && <Route exact path="/add" element={<AddUser />} />}
        <Route exact path="*" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
