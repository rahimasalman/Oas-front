import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo-monochrome.svg'
import homepage from '../../images/homepage-icon.svg'
import settings from '../../images/settings-icon.svg'
import arrowIcon from '../../images/icon-arrow.svg'

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
    <div className="container dashboard">
      <nav className="sidenav">
        <div className="sidenav_logo">
          <img src={logo} className="logo" />
        </div>
        <div className="sidenav_links">
          <a href="#">
            <div className="link">
              <img src={homepage} />
              <span>Homepage</span>
            </div>
            <img src={arrowIcon} className="arrow-icon" />
          </a>
          <a href="#">
            <div className="link">
              <img src={settings} />
              <span>Settings</span>
            </div>
            <img src={arrowIcon} className="arrow-icon" />
          </a>
        </div>
      </nav>
      <main>
        <h1>Welcome to Office Administration System</h1>
        <Link className="btn btn-warning m-2" to="/" onClick={logoutHandler}>
          Log out
        </Link>
      </main>
    </div>
  )
}

export default Dashboard
