import React from 'react'
import HamburgerIcon from './hamburger'
import BookIcon from './book'
import FacebookIcon from './facebook'
import TwitterIcon from './twitter'
import InstagramIcon from './instagram'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
      case 'book':
      return <BookIcon />
      case 'facebook':
      return <FacebookIcon />
      case 'twitter':
      return <TwitterIcon />
      case 'instagram':
      return <InstagramIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
