import { useState } from "react";
import styles from "@/components/treeView/treeView.module.css"
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
            <a href="/grafico" taret="_blank" className={styles.item}>{tecnica.nomeDaTecnica}</a>
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