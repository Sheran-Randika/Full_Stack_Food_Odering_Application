import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css'
import Link from 'next/link';

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image className={styles.imag} src={pizza.img} width={300} height={300} alt="pizza" />
      </Link>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>Rs. {pizza.prices[0]}</span>
        <p className={styles.desc}>
          {pizza.desc}
        </p>
    </div>
  )
}

export default PizzaCard;


