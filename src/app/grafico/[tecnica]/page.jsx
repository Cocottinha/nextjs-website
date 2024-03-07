import PlotComponent from "@/components/charts/chart";
import { readTextFile } from "@/components/charts/getData";
import styles from './grafico.module.css';
import { getPost } from "@/lib/data";

const Grafico = async ( { params } ) => {
  const tecnica = params.tecnica.split('-');
  if (tecnica != '') {
    const post = await getPost(tecnica[0]);
    const { Pontos } = JSON.parse(JSON.stringify(post));
    var objetoAnalise;
    Pontos.forEach(ponto => {
      ponto.AnaliseTecnica.forEach(analise => {
        if (analise.nomeDaTecnica == tecnica[1])
        {
          objetoAnalise = analise
          return
        }
      })
    });

    if (objetoAnalise != null) {
      const file = objetoAnalise.diretorio
      const { arrayA, arrayB } = await readTextFile(file);
      return (
        <div className={styles.container}>
          <h1>{objetoAnalise.nomeDaTecnica}</h1>
          <PlotComponent x={arrayA} y={arrayB}/>
        </div>
      );
    }
    return (
      <div className={styles.container}>
        <h1>Gráfico não encontrado</h1>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <h1>Gráfico não encontrado</h1>
      </div>
    )
  }
}

// export function getServerSideProps(context) {
//   const { diretorio } = context.query
//   console.log(diretorio)
// }

export default Grafico