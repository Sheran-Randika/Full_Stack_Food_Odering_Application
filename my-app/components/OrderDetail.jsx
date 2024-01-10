import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });

    const isValidPhoneNumber = (number) => {
      // Validate phone number using a simple regex
      const phoneRegex = /^\+\d{1,3} \d{1,15}$/;
      return phoneRegex.test(number);
    };
    
    if (!customer || !isValidPhoneNumber(phoneNumber) || !address) {
      alert('Please fill out all required fields with valid information.');
      return;
    }
    

  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay delivery cost after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="tel"
            placeholder="+1 234 567 89"
            className={styles.input}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text" 
            className={styles.textarea}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.btn} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
