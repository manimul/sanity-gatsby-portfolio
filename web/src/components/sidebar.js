import React from "react"
import '../styles/sidebar.css'
import { slide as Menu } from "react-burger-menu"


export default function sidebar() {
  return (
    <div>
        
      <Menu right >
        <a id="home" className="outline-none menu-item" href="/">
          All Categories
        </a>
        <a id="about" className="outline-none menu-item" href="#testid2">
          Random Profile
        </a>
        <a id="courses" className="outline-none menu-item" href="#testid3">
        Events
        </a>
        <a id="android_app" className="outline-none menu-item" href="/">
          About Us
        </a>
        <a id="about" className="outline-none menu-item" href="/">
          Partners
        </a>
        <fav />
      </Menu>
 
    </div>
  )
}
