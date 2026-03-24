import React from 'react'
import './nav.scss'
import DateTime from './dateTime'
const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./nav-icons/apple.svg" alt="" />
            </div>
            <div className="nav-items">
                <p>Tanmay Verma</p>
            </div>
            <div className="nav-items">
                <p>Files</p>
            </div>
            <div className="nav-items">
                <p>Window</p>
            </div>
            <div className="nav-items">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="./nav-icons/wifi.svg" alt="" />
            </div>
            <div className="nav-items">
                <DateTime/>     
            </div>
        </div>
    </nav>
  )
}

export default Nav