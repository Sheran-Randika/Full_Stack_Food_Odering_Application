import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>The best Pizza in Now</h1>
          <p className={styles.desc}>
              A default paragraph is a fundamental element of written communication. 
              It serves as a building block for expressing ideas, 
              conveying information, and engaging readers. 
              Just like this paragraph, default paragraphs can be tailored 
              to specific contexts, subjects, and styles. They are an essential 
              tool for organizing thoughts and effectively sharing content.
          </p>
          <div className={styles.wrapper}>
            {pizzaList.map((pizza) => (
            <PizzaCard key ={pizza._id} pizza={pizza}/>
            ))}
          </div>
      </div>
  )
}

export default PizzaList