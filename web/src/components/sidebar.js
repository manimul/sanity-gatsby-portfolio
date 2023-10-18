import React from "react";
import "../styles/sidebar.css";
import { slide as Menu } from "react-burger-menu";

export default function sidebar() {
  return (
    <div>
      <Menu right>
        <a id="android_app" className="outline-none menu-item" href="/about" target="_blank">
          About Who's Who in Ghana
        </a>
        <a
          id="courses"
          className="outline-none menu-item"
          href="https://whoswhoghana.com/events/"
          target="_blank"
        >
          Events
        </a>
        <a
          id="about"
          className="outline-none menu-item"
          href="https://whoswhoghana.com/advertisers/"
          target="_blank"
        >
          Partner with us
        </a>
        <a id="courses" className="outline-none menu-item" href="https://whoswhoghana.com/#contact">
          Contact Us
        </a>
        <fav />
      </Menu>
    </div>
  );
}
