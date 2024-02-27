"use client"
import styles from "./list.module.css"
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

const App = async({json}) => {
    const pontos = json.Pontos
    const list = []
    // if(post.Pontos){
    //     post.Pontos.forEach(ponto => {
    //         console.log("Ponto",ponto.Nome)
    //         if(ponto.AnaliseTecnica){
    //             ponto.AnaliseTecnica.forEach(tecnica =>{
    //                 console.log("tecnica", tecnica.nomeDaTecnica)
    //             });
    //         }else{
    //             console.log("no tecnica found")
    //         }
    //     });
    // }else{
    //     console.log("no ponto found")
    // }
  return (   
    <ListboxWrapper>
      <Listbox aria-label="Actions" onAction={(key) => alert(key)} className={styles.caixa}>
        <ListboxItem key="1" className={styles.item}>
            Vrau
        </ListboxItem>    
      </Listbox>
    </ListboxWrapper>
  );
}
export default App