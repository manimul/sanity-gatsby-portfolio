import React from 'react'

import styles from './container.module.css'

const Container = ({children}) => {
  return <div className={"container mx-auto px-6 py-12"}>{children}</div>
}

export default Container
