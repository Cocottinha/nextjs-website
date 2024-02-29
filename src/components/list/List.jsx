"use client"
import styles from "./list.module.css"
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";


const App = async({json}) => {
  if (json.Pontos) {
    json.Pontos.forEach(ponto => {
      console.log("Ponto", ponto.Nome)
      if (ponto.AnaliseTecnica) {
        ponto.AnaliseTecnica.forEach(tecnica => {
          console.log("tecnica", tecnica.nomeDaTecnica)
        });
      } else {
        console.log("no tecnica found")
      }
    });
  } else {
    console.log("no ponto found")
  }
  return (   
    <ListboxWrapper>
      <Listbox aria-label="Actions" onAction={(key) => window.open("/grafico")} className={styles.caixa}>
        {json.Pontos.map((ponto) => (
          ponto.AnaliseTecnica.map((tecnica) => (
            <ListboxItem key="1" value="1" className={styles.item}>
                {ponto.Nome+"_"+tecnica.nomeDaTecnica}
              </ListboxItem>
          ))             
          ))                           
        }                    
      </Listbox>
    </ListboxWrapper>
  );
}
export default App