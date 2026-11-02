import styles from './Hero.module.css'
import Carousel from '../../components/Carousel/Carousel' // Ajuste o caminho dependendo de onde salvou o componente

export default function Hero() {
  const slides = [
    { title: 'A', color: '#c82b2b' }, // Vermelho
    { title: 'B', color: '#1d6bf3' }, // Azul
    { title: 'C', color: '#2b2bc8' }, // Roxo
    { title: 'D', color: '#2bc87a' }, // Verde
    { title: 'E', color: '#c82ba4' }, // Rosa
  ]

  return (
    <section className={styles.hero} id="inicio">
      <div className={`${styles.decor} ${styles.decorOne}`} />
      <div className={`${styles.decor} ${styles.decorTwo}`} />
      <div className={`${styles.decor} ${styles.decorThree}`} />
      <div className={`${styles.decor} ${styles.decorFour}`} />

      <div className={styles.content}>
        <p className={styles.kicker}>IDEIAS · PESSOAS · IMPACTO</p>
        <h1>
          Tecnologia que
          <span>Simplifica o dia a dia</span>
        </h1>
        <p className={styles.description}>
          Somos a SalusCore, uma equipe que transforma ideias e problemas reais em soluções digitais.
        </p>
      </div>

      {/* O carrossel entra perfeitamente aqui dentro do bloco visual */}
      <div className={styles.visual} aria-label="Carrossel de apresentação">
        <Carousel items={slides} />
      </div>
    </section>
  )
}
