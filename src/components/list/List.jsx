"use client"
import styles from "./list.module.css"
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";
import {chart} from "@/components/charts/chart"

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
      <Listbox aria-label="Actions" onAction={(key) => window.open(chart)} className={styles.caixa}>
        <ListboxItem key="1" className={styles.item}>
            Ponto_1_XRF_1
        </ListboxItem>    
      </Listbox>
    </ListboxWrapper>
  );
}
export default App