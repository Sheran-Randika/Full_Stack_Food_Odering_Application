import styles from '/styles/Orders.module.css'
import Image from 'next/image';
import { UilInvoice } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons' 
import { UilTruck } from '@iconscout/react-unicons'
import { UilMap } from '@iconscout/react-unicons'
import { UilBox } from '@iconscout/react-unicons'

const Order = () => {
 
    const status= 0;

    const statusClass = (index) => {
        if(index - status<1)return styles.done
        if(index - status===1)return styles.inProgress
        if(index - status>1)return styles.undone
    }; 
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
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <UilInvoice className={styles.icon} size="50" />
                    <span className={styles.statusText}>Payment</span>
                    <div className={styles.checkedIcon}>
                    <UilCheckCircle className={styles.checkedIcon} size="20" color="#00a003"/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <UilBox className={styles.icon} size="50" />
                    <span className={styles.statusText}>Preparing</span>
                    <div className={styles.checkedIcon}>
                    <UilCheckCircle className={styles.checkedIcon} size="20" color="#00a003"/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <UilMap className={styles.icon} size="50" />
                    <span className={styles.statusText}>On the way</span>
                    <div className={styles.checkedIcon}>
                    <UilCheckCircle className={styles.checkedIcon} size="20" color="#00a003"/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <UilTruck className={styles.icon} size="50" />
                    <span className={styles.statusText}>Delivered</span>
                    <div className={styles.checkedIcon}>
                    <UilCheckCircle className={styles.checkedIcon} size="20" color="#00a003"/>
                    </div>
                </div>
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