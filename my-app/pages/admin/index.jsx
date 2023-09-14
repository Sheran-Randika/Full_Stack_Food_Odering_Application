import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Admin.module.css'
import axios from 'axios'
import { useState } from 'react'

const Index = ({orders,products}) => {

    const [pizzaList, setPizzaList] = useState(products);
    const [orderList, setorderList] = useState(orders);
    const status = ["preparing","On the way","delivered"]
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("http://localhost:3000/api/products/" + id);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const handleStatus = async (id) => {
        try {
            const res = await axios.put("http://localhost:3000/api/orders/" + id);
            setorderList(orderList.filter((order) => order._id !== id));
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
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
                {products.map((product) => (
                <tbody key={product._id}>
                    <tr className={styles.trTitle}>
                        <td className={styles.td}>
                            <Image src = {product.img} width={50} height={50} objectFit="cover" />
                        </td>
                        <td className={styles.td}>{product._id.slice(0,5)}...</td>
                        <td className={styles.td}>{product.title}</td>
                        <td className={styles.td}>Rs.{product.prices[0]}</td>
                        <td className={styles.td}>
                            <button className={styles.btn}>Edit</button>
                            <button className={styles.btn} onClick={()=>handleDelete(product._id)}>Delete</button>
                        </td>
                    </tr>
                </  tbody>
                ))}
            </table>
        </div>
        
        <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Customer</th>
                        <th className={styles.th}>Total</th>
                        <th className={styles.th}>Payment</th>
                        <th className={styles.th}>Actions</th>
                    </tr>
                </  tbody>
                {orderList.map(order=>(
                <tbody key={order._id}>
                    <tr className={styles.trTitle}>
                        <td className={styles.td}>{order._id.slice(0,5)}...</td>
                        <td className={styles.td}>{order.customer}</td>
                        <td className={styles.td}>Rs.{order.total}</td>
                        <td className={styles.td}>{order.method === 0 ? (<span>cash</span>) : (<span>paid</span>)}</td>
                        <td className={styles.td}>{status[order.status]}</td>
                        <td className={styles.td}>
                            <button className={styles.btn} onClick={()=>handleStatus(order._id)}>NextStage</button>
                        </td>
                    </tr>
                </  tbody>
                ))}
            </table>
        </div>         
    </div>
  )
}

export const getServerSideProps = async () => {
    const productRes = await axios.get('http://localhost:3000/api/products') 
    const orderRes = await axios.get('http://localhost:3000/api/orders')

    return {
        props: {
            products: productRes.data,
            orders: orderRes.data
        }
    };
};

export default Index