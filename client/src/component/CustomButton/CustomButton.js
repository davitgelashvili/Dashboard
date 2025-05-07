import React from 'react'
import styles from './CustomButton.module.scss'

export default function CustomButton({children}) {
  return (
    <div className={styles.btn}>
        {children}
    </div>
  )
}
