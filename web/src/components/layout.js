import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, siteLogo}) => (
  <>
  <div className="master-wrapper bg-gradient-brand ">
    <Header siteTitle={siteTitle} siteLogo={siteLogo} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={"container",styles.content}>{children}</div>
    <footer className={'bg-brand-dark'}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, WWiG - Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
    </div>
  </>
)

export default Layout
