import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle, siteLogo}) => (
  <div className={cn("  text-white", styles.root)}>
    <div className={cn("container", styles.wrapper)}>
      <div className={ styles.branding}>
        <Link to='/'><img src={siteLogo}/></Link>
        
        
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn("uppercase",styles.nav, showNav && styles.showNav )}>
        <ul>
          <li className="uppercase">
            <Link to='/influential/'>Most Influential</Link>
          </li>
          <li>
          <Link to='/entrepreneurs/'>Entrepreneurs</Link>
          </li>
          <li>
          <Link to='/spiritual-leaders/'>Spiritual Leaders</Link>
          </li>
          <li>
          <Link to='/corporate-gurus/'>Corporate</Link>
          </li>
          <li>
          <Link to='/power-ladies/'>Power Ladies</Link>
          </li>
          <li>
          <Link to='#'>More</Link>
          </li>
        
    
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
