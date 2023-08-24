import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.jpg" width={300} height={300} alt="pizza" />
        <h1 className={styles.title}>Pizza</h1>
        <span className={styles.price}>Rp. 100.000</span>
        <p className={styles.desc}>
            A default paragraph is a fundamental element of written communication.
        </p>
    </div>
  )
}

export default PizzaCard