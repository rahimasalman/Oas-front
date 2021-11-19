import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className="container">
      <h1>welcome</h1>
      <Link className="btn btn-warning m-2" to="/" onClick={logoutHandler}>
        Log out
      </Link>
    </div>
  )
}

export default Dashboard
