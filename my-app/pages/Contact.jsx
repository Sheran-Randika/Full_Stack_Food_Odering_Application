import React from 'react'
import styles from '../styles/PizzaList.module.css'
import { UilPhone,UilLocationPoint } from '@iconscout/react-unicons'

const Contact = ({Contact}) => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.desc}>
          <UilLocationPoint size="40" color="Black" margin="100px" /><br></br>
          Heda Office<br></br>
          No: 54/5,<br></br>
          Borella Road,<br></br>
          Colombo.<br></br><br></br>
          <UilPhone size="36" color="Black" margin="100px" /><br></br>
          Tel: 011 2 695 695
          </p>
          
      </div>
  )
}

export default Contact