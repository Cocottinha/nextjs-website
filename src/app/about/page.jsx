import styles from "./about.module.css"
import Image from "next/image"

const About = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Sobre Nós</h2>
                <h1 className={styles.title}>Nós somos uma equipe de cientistas, pesquisadores e desenvolvedores.</h1>
                <p className={styles.desc}>
                    Apartir de 2019, ano da fundação do Lab.Mov, dedicamos nosso tempo para a análise físico-química de obras de arte e patrimônio histórico-cultural.
                    Com uma equipe ampla, possuindo técnicos das mais diversas áreas da ciência.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>11+</h1>
                        <p>Museus Visitados</p>
                    </div>
                    <div className={styles.box}>
                        <h1>50+</h1>
                        <p>Obras Analisadas</p>
                    </div>
                    <div className={styles.box}>
                        <h1>4+</h1>
                        <p>Anos de Experiência</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/ifrj.webp"
                    alt="Trabalho de Campo"
                    fill className={styles.imgabout}/>
            </div>
        </div>
    )
}
export default About