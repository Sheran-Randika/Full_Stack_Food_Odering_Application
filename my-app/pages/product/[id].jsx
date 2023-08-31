import styles from '../../styles/Product.module.css'
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';

const Product = ({pizza}) => { 
    const[price, setPrice] = useState(pizza.prices[0]);
    const[size, setSize] = useState(0);
    const[extras, setExtras]= useState([]);

    const changePrice = (number) =>{
        setPrice(price + number);
    };

        const handleSize = (sizeIndex)=>{
            const difference = pizza.prices[sizeIndex] - pizza.prices[size];
            setSize(sizeIndex);
            changePrice(difference);
        };

        const handleChange=(e,option) =>{
            const checked =e.target.checked;

        if(checked){
            changePrice(option.price);
            setExtras((prev)=>[...prev, option]);
            
        }else{
            changePrice(-option.price);
            setExtras(extras.filter((extra)=> extra._id !== option._id));
        }
    };

  return (
    <div className={styles.container} >
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout='fill' alt="pizza" objectFit='content' />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>RS. {price}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3> 
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>handleSize(0)}>
                    <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='content' />
                    <span className={styles.sizeName}>Small</span>
                </div>
                <div className={styles.size} onClick={()=>handleSize(1)}>
                    <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='content' />
                    <span className={styles.sizeName}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>handleSize(2)}>
                    <Image src="/img/pizza.jpg" layout='fill' alt="pizza" objectFit='content' />
                    <span className={styles.sizeName}>Large</span>
                </div>      
            </div>
            <h3 className={styles.choose}>Choose the additional ingredients</h3>
              <div className={styles.ingredients}>
                {pizza.extraOptions.map(option=>( 
                  <div className={styles.option} key={option._id}>
                      <input type="checkbox" 
                      name={option.text} 
                      id={option.text} 
                      className={styles.checkbox} 
                      onChange={(e)=>handleChange(e,option)}
                      />
                      <label htmlFor="double" className={styles.label}>{option.text}</label>
                  </div>
                  ))} 
              </div>
                <div className={styles.adds}>
                    <input type="number" defaultValue="1" className={styles.quantity} />
                    <button className={styles.btn}>Add to cart</button>
                </div>
        </div> 
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `http://localhost:3000/api/products/${params.id}`
    );
    return {
      props: {
        pizza: res.data,
      },
    };
};


export default Product