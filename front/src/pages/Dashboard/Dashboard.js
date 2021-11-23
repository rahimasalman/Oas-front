import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo-monochrome.svg'
import homepage from '../../images/homepage-icon.svg'
import settings from '../../images/settings-icon.svg'
import orders from '../../images/icon-orders.svg'
import arrowIcon from '../../images/icon-arrow.svg'
import categoriesIcon from '../../images/icon-categories.svg'
import typesIcon from '../../images/icon-types.svg'

function Dashboard() {
  const [dropRight, setDropRight] = useState(false)

  const onMouseEnter = () => {
    setDropRight(true)
  }
  const onMouseLeave = () => {
    setDropRight(false)
  }

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
          <Link to="/dashboard">
            <div className="link">
              <img src={homepage} />
              <span>Homepage</span>
              <img src={arrowIcon} className="arrow-icon" />
            </div>
          </Link>

          <a>
            <div className="link">
              <img src={orders} />
              <span>Orders</span>
              <img src={arrowIcon} className="arrow-icon" />
            </div>
          </a>
          <a onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="link">
              <img src={settings} />
              <span>Settings</span>
              <img src={arrowIcon} className="arrow-icon" />
            </div>
            <ul className={`dropdownItems ${dropRight ? 'd-block' : 'd-none'}`}>
              <li>
                <Link to="/categories">
                  <img src={categoriesIcon} />
                  Categories
                </Link>
              </li>
              <li>
                <img src={typesIcon} />
                Types
              </li>
            </ul>
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
