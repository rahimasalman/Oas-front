import './App.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import Home from './Home'
import AddUser from './AddUser'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories/Categories'
import logo from './images/logo-monochrome.svg'
import homepage from './images/homepage-icon.svg'
import settings from './images/settings-icon.svg'
import arrowIcon from './images/icon-arrow.svg'

import categoriesIcon from './images/icon-categories.svg'
import typesIcon from './images/icon-types.svg'
function App() {
  const tokenAdmin = localStorage.getItem('tokenAdmin')
  const tokenUser = localStorage.getItem('tokenUser')

  console.log(tokenUser)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
        {tokenUser && <Route exact path="/dashboard" element={<Dashboard />} />}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/categories" element={<Categories />} />
        {tokenAdmin && <Route exact path="/home" element={<Home />} />}
        <Route exact path="/add" element={<AddUser />} />
        {tokenAdmin && <Route exact path="/add" element={<AddUser />} />}
        <Route exact path="*" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
