import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-monochrome.svg'
import homepage from '../images/homepage-icon.svg'
import settings from '../images/settings-icon.svg'
import arrowIcon from '../images/icon-arrow.svg'
import categoriesIcon from '../images/icon-categories.svg'
import typesIcon from '../images/icon-types.svg'
import orders from '../images/icon-orders.svg'
function Sidenav() {
  const [dropRight, setDropRight] = useState(false)

  const onMouseEnter = () => {
    setDropRight(true)
  }
  const onMouseLeave = () => {
    setDropRight(false)
  }

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

          <Link to="/orders">
            <div className="link">
              <img src={orders} />
              <span>Orders</span>
              <Link to="/home">
                <img src={arrowIcon} className="arrow-icon" />
              </Link>
            </div>
          </Link>

          <Link
            to="/settings"
            onMouseOver={onMouseEnter}
            onMouseLeave={onMouseLeave}>
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
                <Link to="/types">
                  <img src={typesIcon} />
                  Types
                </Link>
              </li>
            </ul>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidenav
