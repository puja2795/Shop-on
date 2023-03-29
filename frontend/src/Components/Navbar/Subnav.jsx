import React from 'react'
import styles from "./Subnav.module.css"

export const Subnav = () => {
  return (
    <div className={styles.subnav}>
        <div className={styles.subItem}>Women Ethnic</div>
        <div className={styles.subItem}>Women Western</div>
        <div className={styles.subItem}>Men</div>
        <div className={styles.subItem}>Kids</div>
        <div className={styles.subItem}>Home & Kitchen</div>
        <div className={styles.subItem}>Beauty & Health</div>
        <div className={styles.subItem}>Jewellery & Accessories</div>
        <div className={styles.subItem}>Bags & Footwear</div>
        <div className={styles.subItem}>Electronics</div>
    </div>
  )
}
