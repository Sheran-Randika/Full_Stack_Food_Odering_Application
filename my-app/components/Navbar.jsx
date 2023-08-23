  import styles from "../styles/Navbar.module.css";
  import Image from "next/image";
  import { UilPhone,UilShoppingCart } from '@iconscout/react-unicons';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
      <UilPhone size="30" color="gold" />      
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>94 705 704 651</div>
      </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logoN.png" alt="logo" width="120" height="85" layout="" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}> 
          <UilShoppingCart size="37" color="white" />
          <div className={styles.counter}>2</div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar