import React from 'react'
import styles from '../styles/AddButton.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { set } from 'mongoose'

const Add = ({setClose}) => {
    const [file,setFile]=useState(null);
    const [title,setTitle]=useState(null);
    const [desc,setDesc]=useState(null);
    const [prices,setPrices]=useState([]);
    const [extraOptions,setExtraOptions]=useState([]);
    const [extra,setExtra]=useState(null);


    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value; 
        setPrices(currentPrices);
    }
    
    const handleExtraInput = (e) => {
        setExtra({...extra,[e.target.name]:e.target.value});
    }

    const handleExtra = (e) => {
        setExtraOptions((prev)=> [...prev,extra]);
    };

    const handleCreate = async (e) => {
        const data = new FormData();
        data.append("file",file);
        data.append("upload_preset","uploads");
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/djhjdzbca/image/upload",data);
            const {url} =uploadRes.data;
            const newProduct = {
                title,
                desc,
                prices,
                extraOptions,
                img:url,
            };
            await axios.post("http://localhost:3000/api/products",newProduct); 
            setClose(true);
            // console.log(uploadRes.data);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span className={styles.close} onClick={()=>setClose(true)}>X</span>
            <h1>Adda a New Pizza</h1>
            <div className={styles.item}>
                <label className={styles.label}>Choose an Image</label>
                <input type="file" 
                className={styles.inputImg} 
                placeholder="Image URL" 
                onChange={(e)=>setFile(e.target.files[0])}/>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Title</label>
                <input type="text" className={styles.input} placeholder="Title" 
                onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Description</label>
                <input type="text" className={styles.input} placeholder="Description" 
                onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Prices</label>
                <div className={styles.priceContainer}>
                <input type="number" className={`${styles.input} ${styles.inputSmall}`} placeholder="Small" 
                onChange={(e)=>changePrice(e, 0)}/>
                <input type="number" className={`${styles.input} ${styles.inputSmall}`} placeholder="Medium" 
                onChange={(e)=>changePrice(e, 1)}/>
                <input type="number" className={`${styles.input} ${styles.inputSmall}`} placeholder="Large" 
                onChange={(e)=>changePrice(e, 2)}/>
                </div>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Extra</label>
                <div className={styles.extra}>
                    <input type="text" 
                    name='text'
                    className={`${styles.input} ${styles.inputSmall}`} 
                    placeholder="Item" 
                    onChange={handleExtraInput}/>
                    <input type="number" 
                    name='price'
                    className={`${styles.input} ${styles.inputSmall}`} 
                    placeholder="Price" 
                    onChange={handleExtraInput}/>
                    <button className={styles.btnExtra} onClick={handleExtra}>
                    ADD
                    </button>
                </div>
                <div className={styles.extraItems}>
                    {extraOptions.map((option)=>(
                            <span 
                            key={option.text} 
                            className={styles.extraText}>
                                {option.text}
                            </span>
                    ))}
                </div>
            </div>
            <button className={styles.addBtn} 
            onClick={handleCreate}>
                Create
            </button>
        </div>
    </div>
  )
}

export default Add