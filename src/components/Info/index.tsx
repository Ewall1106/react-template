import React from 'react'
import { observer } from 'mobx-react'
import logo from '@/assets/logo.png'

import styles from './index.module.scss'

export const Info = observer(({ name }) => {
  return (
    <div className={styles.info}>
      <img width="40" height="40" src={logo} alt="logo" />
      <p className={styles.info__title}>{name}</p>
      <p className={styles.info__desc}>
        <span>Documents: </span>
        <a href="https://bamboo-docs.vercel.app/" target="_blank" rel="noopener noreferrer">
          https://bamboo-docs.vercel.app
        </a>
      </p>
    </div>
  )
})

export default Info
