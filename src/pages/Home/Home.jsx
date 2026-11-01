import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Market from '../../components/Market/Market'
import styles from './Home.module.css'
import RotuScan from '../../components/RotuScan/RotuScan'

export default function Home() {
  return (
    <div className={styles.page}>
      
      <main>

        <Navbar />
        
        <Hero />

        <About />

        <Market />

        <RotuScan />

       

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
