import React from "react"
import '../styles/sidebar.css'
import { slide as Menu } from "react-burger-menu"


export default function sidebar() {
  return (
    <div>
        
      <Menu right >
       
        <a id="android_app" className="outline-none menu-item" href="/">
          About Who's Who in Ghana
        </a>
        <a id="courses" className="outline-none menu-item" href="#testid3">
        Events
        </a>
        <a id="about" className="outline-none menu-item" href="/">
          Partner with us
        </a>
        <a id="courses" className="outline-none menu-item" href="#testid3">
        Contact Us
        </a>
        <fav />
      </Menu>
 
    </div>
  )
}
