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

      <nav className={cn("text-sm font-bold ",styles.nav, showNav && styles.showNav )}>
        <ul >
          <li className="px-3">
            <Link to='/most-influential/'>Most Influential</Link>
          </li>
          <li className="px-3">
          <Link to='/entrepreneurs/'>Entrepreneurs</Link>
          </li>
          <li className="px-3">
          <Link to='/spiritual-leaders/'>Spiritual Leaders</Link>
          </li>
          <li className="px-3">
          <Link to='/corporate-gurus/'>Corporate</Link>
          </li >
          <li className="px-3">
          <Link to='/power-ladies/'>Power Ladies</Link>
          </li>
          <li className="text-blue-accent px-3">
         
          <Link className="inline-flex"  to='#'><span className="text-xl" ><Icon  symbol='book'/></span><span className="pl-1">WWiG Book</span></Link>
          </li>
         
          
        
    
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
