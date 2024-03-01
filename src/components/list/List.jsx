"use client"
import styles from "./list.module.css"
import {Listbox, ListboxItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";
import TreeView from "../treeView/treeView";

const App = async({json}) => {
  if (json.Pontos) {
    json.Pontos.forEach(ponto => {
      //console.log("Ponto", ponto.Nome)
      if (ponto.AnaliseTecnica) {
        ponto.AnaliseTecnica.forEach(tecnica => {
          //console.log("tecnica", tecnica.nomeDaTecnica)
        });
      } else {
        //console.log("no tecnica found")
      }
    });
  } else {
    //console.log("no ponto found")
  }
  return (  
    
    <TreeView data={json}></TreeView>
    // <ListboxWrapper>
    //   <Listbox aria-label="Actions" className={styles.caixa}>
    //     {json.Pontos.map((ponto) => (
    //       <ListboxItem key={ponto.Nome} className={styles.item} onMouseOver={(key) => (ponto.AnaliseTecnica.map((tecnica) => {
    //         <ListboxItem key={tecnica.nomeDaTecnica}>
    //         {tecnica.nomeDaTecnica}
    //       </ListboxItem>
    //       }
    //       ))}>
    //         {ponto.Nome}
    //       </ListboxItem>
    //     ))
    //     }
    //   </Listbox>
    // </ListboxWrapper>


    // <TreeView
    //   aria-label="point and technique navigation"
    //   className={styles.caixa}
    // >
    //   <TreeItem nodeId="1" label="Ponto_1" className={styles.item}>
    //     <TreeItem nodeId="2" className={styles.item}/>
    //   </TreeItem>
    // </TreeView>
  );
}
export default App