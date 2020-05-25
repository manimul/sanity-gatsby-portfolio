import React from "react"
import '../styles/sidebar.css'
import { slide as Menu } from "react-burger-menu"


export default function sidebar() {
  return (
    <div>
        
      <Menu right >
        <a id="home" className="menu-item" href="/">
          All Categories
        </a>
        <a id="about" className="menu-item" href="#testid2">
          Random Profile
        </a>
        <a id="courses" className="menu-item" href="#testid3">
        Events
        </a>
        <a id="android_app" className="menu-item" href="/">
          About Us
        </a>
        <a id="about" className="menu-item" href="/">
          Partners
        </a>
        <fav />
      </Menu>
 
    </div>
  )
}
