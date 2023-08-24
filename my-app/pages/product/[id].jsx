import React from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image';
import { useState } from 'react';

const Product = () => { 

    const[size, setSize] = useState(0)

    const pizza ={
        id: 1,
        img: '/img/pizza.jpg',
        name: 'Pizza',
        price: [1000,2000,3000],
        desc: 'A default paragraph is a fundamental element of written communication.'
    };

  return (
    <div className={styles.container} >
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout='fill' alt="pizza" objectFit='content' />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>RS. {pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3> 
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>setSize(0)}>
                    <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='content' />
                    <span className={styles.sizeName}>Small</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(1)}>
                    <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='content' />
                    <span className={styles.sizeName}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(2)}>
                    <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='content' />
                    <span className={styles.sizeName}>Large</span>
                </div>      
            </div>
              <h3 className={styles.choose}>Choose the additional ingredients</h3>
              <div className={styles.ingredients}>
                  <div className={styles.option}>
                      <input type="checkbox" name="double" id="double" className={styles.checkbox} />
                      <label htmlFor="double" className={styles.label}>Double ingredients</label>
                  </div>
                  <div className={styles.option}>
                      <input type="checkbox" name="spicy" id="spicy" className={styles.checkbox} />
                      <label htmlFor="spicy" className={styles.label}>Spicy Sause</label>
                  </div>
                  <div className={styles.option}>
                      <input type="checkbox" name="cheese" id="cheese" className={styles.checkbox} />
                      <label htmlFor="cheese" className={styles.label}>Extra Cheese</label>
                  </div>
                  <div className={styles.option}>
                      <input type="checkbox" name="garlic" id="garlic" className={styles.checkbox} />
                      <label htmlFor="garlic" className={styles.label}>Garlic Sause</label>
                  </div>
              </div>
                <div className={styles.adds}>
                    <input type="number" defaultValue="1" className={styles.quantity} />
                    <button className={styles.btn}>Add to cart</button>
                </div>
        </div> 
    </div>
  )
}

export default Product