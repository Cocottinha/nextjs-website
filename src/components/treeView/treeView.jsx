import { useState } from "react";
import styles from "@/components/treeView/treeView.module.css"
import PlotComponent from "../charts/chart";
import { readTextFile } from "../charts/getData";
import Link from "next/link";

const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };


    return (
      <div>
        <div onClick={handleToggle} className={styles.view}>
          {isExpanded ? '▼' : '▶'} {node.Nome}
        </div>
        {isExpanded && node.AnaliseTecnica && node.AnaliseTecnica.map((tecnica, index) => (
          <div key={index} className={styles.item}>          
            <Link href={{
              pathname:'/grafico',
              query:(tecnica.nomeDaTecnica)}} target="_blank" className={styles.item}>
            {tecnica.nomeDaTecnica}
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  const TreeView = ({ data }) => {
    return (
      <div className={styles.caixa}>
        {data.Pontos.map((ponto) => (
          <TreeNode key={ponto.IdPonto} node={ponto} />
        ))}
      </div>
    );
  };
  
  export default TreeView;