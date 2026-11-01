import styles from './Hero.module.css'

export default function Hero() {
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

      <div className={styles.visual} aria-label="Elementos gráficos abstratos">
        <div className={styles.redBlock} />
        <div className={styles.blueBlock} />
        <div className={styles.greenBlock} />
      </div>
    </section>
  )
}
