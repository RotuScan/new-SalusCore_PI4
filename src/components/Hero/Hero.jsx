import styles from './Hero.module.css'
import Carousel from '../../components/Carousel/Carousel' 

export default function Hero() {
  const slides = [
    { image: '/images/new-image1.png', color: '#c5262a' },
    { image: '/images/new-image2.png', color: '#2454e9' },
    { image: '/images/new-image3.png', color: '#2b2bc8' },
    { image: '/images/new-image4.png', color: '#a8e900' },
    { image: '/images/new-image5.png', color: '#c82ba4' },
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

      {/* 2. O Carousel fica aqui dentro do .visual, renderizado UMA única vez */}
      <div className={styles.visual} aria-label="Elementos gráficos abstratos">
        <div className={styles.carouselSection}>
          <Carousel items={slides} />
        </div>
      </div>
    </section>
  )
}