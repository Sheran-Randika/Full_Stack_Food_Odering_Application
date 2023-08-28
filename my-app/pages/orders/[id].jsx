import styles from '/styles/Orders.module.css'
import Image from 'next/image';

const Order = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                  <tr className={styles.trTitle}>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Address</th>
                      <th>Total</th>
                  </tr>
                  <tr className={styles.tr}>
                    <td>
                        <span className={styles.id}>7854873587468</span>
                    </td>
                    <td>
                        <span className={styles.name}>Randika SR</span>
                    </td>
                    <td>
                        <span className={styles.address}>N0:34/4, Kelaniya ,Srilanka</span>
                    </td>
                    <td>
                        <span className={styles.total}>RS. 1000</span>
                    </td>
                  </tr>
              </table>
            </div>
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
                  <button disabled className={styles.btn}>PAID</button>
              </div>
        </div>
    </div>
  )
}

export default Order