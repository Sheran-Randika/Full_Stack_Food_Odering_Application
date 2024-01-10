import styles from '/styles/Orders.module.css'
import Image from 'next/image';
import { UilInvoice } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons' 
import { UilTruck } from '@iconscout/react-unicons'
import { UilMap } from '@iconscout/react-unicons'
import { UilBox } from '@iconscout/react-unicons'
import axios from "axios";

const Order = ({ order }) => {
    const status = order.status;
  
    const statusClass = (index) => {
      if (index - status < 1) return styles.done;
      if (index - status === 1) return styles.inProgress;
      if (index - status > 1) return styles.undone;
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
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td>
                  <span className={styles.total}>Rs.{order.total}</span>
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
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rs.{order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>Rs.0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rs.{order.total}
          </div>
          <button disabled className={styles.btn}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
      const order = res.data; // Assuming the order is in the response data
  
      if (!order) {
        // Handle the case where the order is not found
        return {
          notFound: true,
        };
      }
  
      return {
        props: { order },
      };
    } catch (error) {
      console.error("Error fetching order:", error);
      return {
        notFound: true, // Handle the error state by showing a 404 page or an appropriate message
      };
    }
  };
  
export default Order;