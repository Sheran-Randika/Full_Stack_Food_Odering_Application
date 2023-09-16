import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        try{
            await axios.post("http://localhost:3000/admin/login", {
                username,
                password,
            });
            router.push("/admin");
        }catch(err){
            setError(true);
        }
    };
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Admin Dashboard</h1>
            <input type ="text" 
            className={styles.input}
            placeholder='username' 
            onChange={(e) => setUsername(e.target.value)} />
            <input type ="password"
            className={styles.input}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)} />
            <button className={styles.btn}
            onClick={handleClick} >Sign In</button>
            {error && <span className={styles.error}>Something went wrong!</span>}
        </div>
    </div>
  )
}

export default Login