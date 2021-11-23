import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Sidenav from '../../components/Sidenav'

function Dashboard() {
  const tokenUser = localStorage.getItem('tokenUsers')
  const logoutHandler = () => {
    if (tokenUser) {
      localStorage.removeItem('tokenUsers')
    }
  }
  const navigate = useNavigate()

  useEffect(() => {
    tokenUser ? navigate('/dashboard') : navigate('/')
  }, [tokenUser, navigate])

  return (
    <>
      <Sidenav />
      <main className="dashboard">
        <h1>Welcome to Office Administration System</h1>
        <Link className="btn btn-warning m-2" to="/" onClick={logoutHandler}>
          Log out
        </Link>
      </main>
    </>
  )
}

export default Dashboard
