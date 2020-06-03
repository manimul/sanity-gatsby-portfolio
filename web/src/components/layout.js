import React from 'react'
import Header from './header'
import Footer from './footer'
import scrollTo from 'gatsby-plugin-smoothscroll';


import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, siteLogo, siteDescription}) => (
  <>
  <div className="master-wrapper bg-gradient-brand ">
    <Header siteTitle={siteTitle} siteLogo={siteLogo} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className="container px-5 md:px-0 pt-16 mx-auto">{children}</div>
    <Footer siteLogo={siteLogo} siteDescription={siteDescription}></Footer>
  
    </div>
  </>
)

export default Layout
