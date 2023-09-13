import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Admin.module.css'

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th className={styles.th}>Image</th>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Title</th>
                        <th className={styles.th}>Price</th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                </  tbody>
                <tbody>
                    <tr className={styles.trTitle}>
                        <td className={styles.td}>
                            <Image src = "/images/pizza1.jpg" width={100} height={100} objectFit="cover" />
                        </td>
                        <td className={styles.td}>PizzaID</td>
                        <td className={styles.td}>Pizza Title</td>
                        <td className={styles.td}>Rs.50</td>
                        <td className={styles.td}>
                            <button className={styles.btn}>Edit</button>
                            <button className={styles.btn}>Delete</button>
                        </td>
                    </tr>
                </  tbody>
            </table>
        </div>
        
        <div className={styles.item}></div>         
    </div>
  )
}

export default index