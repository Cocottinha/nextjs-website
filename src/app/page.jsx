import styles from "@/app/home.module.css"
import React from "react";

const Home = () => { 
  return <div className={styles.container}>
    <div className={styles.textbox}>
      <h1 className={styles.title}>Horas Complementares</h1>
      <p className={styles.desc}>
        Uma página Faeterj para administração das suas horas complementares!!!    
      </p>
    </div>
  </div>;
};

export default Home;