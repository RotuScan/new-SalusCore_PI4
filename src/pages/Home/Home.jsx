import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Market from '../../components/Market/Market'
import styles from './Home.module.css'
import RotuScan from '../../components/RotuScan/RotuScan'
import Team from '../../components/Team/Team'



export default function Home() {
  return (
    <div className={styles.page}>
      
      <main>

        <Navbar />
        
        <Hero />

        <About />

        <Market />

        <RotuScan />

        <Team />

        

       

      </main>
    
    </div>
  )
}