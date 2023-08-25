import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image';

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
              <table className={styles.table}>
                  <tr className={styles.trTitle}>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Extras</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                  </tr>
                  <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='cover' />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Pizza</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Double ingredients</span>
                    </td>
                    <td>
                        <span className={styles.price}>RS. 1000</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>1</span>
                    </td>
                    <td>
                        <span className={styles.total}>RS. 1000</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='cover' />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Pizza</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Double ingredients</span>
                    </td>
                    <td>
                        <span className={styles.price}>RS. 1000</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>1</span>
                    </td>
                    <td>
                        <span className={styles.total}>RS. 1000</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='cover' />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Pizza</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Double ingredients</span>
                    </td>
                    <td>
                        <span className={styles.price}>RS. 1000</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>1</span>
                    </td>
                    <td>
                        <span className={styles.total}>RS. 1000</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='cover' />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Pizza</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Double ingredients</span>
                    </td>
                    <td>
                        <span className={styles.price}>RS. 1000</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>1</span>
                    </td>
                    <td>
                        <span className={styles.total}>RS. 1000</span>
                    </td>
                  </tr>
              </table>
        </div>
          <div className={styles.right}>
              <div className={styles.wrapper}>
                  <h2 className={styles.title}>Cart Totals</h2>
                  <div className={styles.totalText}>
                      <b className={styles.totalTextTitle}>Subtotal:</b>Rs: 1000
                  </div>
                  <div className={styles.totalText}>
                      <b className={styles.totalTextTitle}>Shipping:</b>Rs: 100
                  </div>
                  <div className={styles.totalText}>
                      <b className={styles.totalTextTitle}>Total:</b>Rs: 1100
                  </div>
                  <button className={styles.btn}>Proceed to checkout</button>
              </div>
          </div>
    </div>
  )
}

export default Cart