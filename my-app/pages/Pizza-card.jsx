import React from 'react'
import styles from '../styles/PizzaList.module.css'

const PizzaList = ({pizzaList}) => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>Taste the Extraordinary: WHITE HOUSE</h1>
          <p className={styles.desc}>
          Make a reservation today and embark on a 
          culinary journey that will tantalize your 
          taste buds and leave you with lasting memories. 
          We look forward to hosting you at White House Restaurant.
          </p>
          
      </div>
  )
}

export default PizzaList