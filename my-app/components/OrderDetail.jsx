import React from 'react'
import styles from '../styles/OrderDetail.module.css'
import { useState } from 'react'

const OrderDetail = () => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay shipping cost after delivery</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input className={styles.input} type="text"
          placeholder="Enter your name" 
          onChange={(e)=>setCustomer(e.target.value)} />
        </div>
    </div>
    </div>
  )
}

export default OrderDetail