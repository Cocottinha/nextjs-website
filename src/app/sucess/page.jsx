import styles from "@/app/home.module.css"
import React from "react";

const Sucess = () => { 
  return <div className={styles.container}>
    <div className={styles.textbox}>
      <h1 className={styles.title}>Conta Criada com Sucesso!</h1>
      <a href="/login"><p className={styles.desc}>
        Clique aqui para ser redirecionado ao Login.    
      </p></a>     
    </div>
  </div>;
};

export default Sucess;