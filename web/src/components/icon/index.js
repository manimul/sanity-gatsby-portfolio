import React from 'react'
import HamburgerIcon from './hamburger'
import BookIcon from './book'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
      case 'book':
      return <BookIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
