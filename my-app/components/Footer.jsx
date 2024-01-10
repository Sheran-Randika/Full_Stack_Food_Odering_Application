import styles from '../styles/Footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/drinks-restaurant.jpg" layout="fill" alt="logo" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          Warm ambiance welcomed hungry guests
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            find Our Retaurant
          </h1>
          <p className={styles.text}>
            67/3. Nathuwal KM 26,<br/>
            Hambantota, Sri Lanka.<br/>
            +94 47 1 22 222<br/>
          </p>
          <p className={styles.text}>
            66/7. Walasmulla KM 26,<br/>
            Hambantota, Sri Lanka.<br/>
            +94 47 4 25 222<br/>
          </p>
          <p className={styles.text}>
            4B/3. Galle KM 6,<br/>
            Hambantota, Sri Lanka.<br/>
            +94 47 5 12 222<br/>
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Working Hours
          </h1> 
          <p className={styles.text}>
            Monday - Friday<br/>
            9:00 - 22:00<br/>
          </p>
          <p className={styles.text}>
            Saturday - Sunday<br/>
            12:00 - 24:00<br/>
          </p>
        </div>
      </div> 
    </div>
  )
}

export default Footer