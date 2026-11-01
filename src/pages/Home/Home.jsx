import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Market from '../../components/Market/Market'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />

        
       <About />

      <Market />

        <section id="projeto" className={styles.placeholderSection}>
          <span className={styles.eyebrow}>NOSSO PROJETO</span>
          <h2>Rotu<span className={styles.green}>Scan</span></h2>
          <p>Apresentação do produto RotuScan — em desenvolvimento.</p>
        </section>

        <section id="equipe" className={styles.placeholderDark}>
          <span className={styles.eyebrow}>NOSSA EQUIPE</span>
          <h2>Pessoas que fazem a <span>SalusCore</span> acontecer.</h2>
          <p>Seção da equipe — em desenvolvimento.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <img src="/images/saluscore-mark.svg" alt="" />
        <strong>SalusCore</strong>
        <span>© {new Date().getFullYear()} SalusCore. Todos os direitos reservados.</span>
      </footer>
    </div>
  )
}
