  import styles from "../styles/Navbar.module.css";
  import Image from "next/image";
  import { UilPhone,UilShoppingCart } from '@iconscout/react-unicons';
  import { useSelector } from "react-redux";
  import Link from "next/link";

const Navbar = () => {

  const quantity =useSelector((state)=> state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
      <UilPhone size="30" color="white" />      
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>94 705 704 651</div>
      </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
          <li className={styles.listItem}>HomePage</li>
          </Link> 
          <Link href="/Pizza-card" passHref>
          <li className={styles.listItem}>Menu</li></Link>
          <Link href="/" passHref><Image src="/img/logoN.png" alt="logo" width="120" height="85" /></Link>
          <Link href="/Events" passHref><li className={styles.listItem}>Events</li></Link>
          <Link href="/Contact" passHref><li className={styles.listItem}>Contact</li></Link>
          
        </ul>
      </div>
      <Link href= "/cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}> 
          <UilShoppingCart size="37" color="black" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div> 
      </Link>
    </div>
  )
}

export default Navbar