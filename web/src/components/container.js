import React from 'react'

import styles from './container.module.css'

const Container = ({children}) => {
  return <div className={"container mx-auto py-12"}>{children}</div>
}

export default Container
