import { FiLinkedin, FiGithub, FiYoutube, FiMail } from 'react-icons/fi'
import styles from './Team.module.css'
import Footer from '../../components/Footer/Footer'
// Importando corretamente da pasta src/assets/team/
import arthurImg from '../../assets/team/arthur.jpeg'
import endrewImg from '../../assets/team/endrew.jpeg'
import guilhermeImg from '../../assets/team/guilherme.jpeg'
import isaacImg from '../../assets/team/isaac.jpeg'
import noemiImg from '../../assets/team/noemi.jpeg'

// Se você tiver a logo da SalusCore importada, substitua o caminho abaixo:
// import logoImg from '../../assets/logo.svg'

const members = [
  { nome: 'Arthur Albino', cargo: 'DEVOPS', cor: 'blue', foto: arthurImg },
  { nome: 'Endrew Lemos', cargo: 'UI / UX DESIGNER', cor: 'red', foto: endrewImg },
  { nome: 'Guilherme Bittencourt', cargo: 'BACK-END MOBILE', cor: 'blue', foto: guilhermeImg },
  { nome: 'Isaac Hideki', cargo: 'FRONT-END MOBILE', cor: 'red', foto: isaacImg },
  { nome: 'Noemi Tejada', cargo: 'FRONT-END WEB', cor: 'blue', foto: noemiImg },
]

export default function Team() {
  return (
    <section className={styles.team} id="equipe">
      <div className={styles.container}>

        <div className={styles.sectionLabel}>
          <span>NOSSA EQUIPE</span>
          <div />
        </div>

        <h2>
          Pessoas que fazem a <span>SalusCore</span> acontecer.
        </h2>

        <div className={styles.members}>
          {members.map((member) => (
            <article className={styles.member} key={member.nome}>
              <div className={`${styles.avatar} ${styles[member.cor]}`}>
                <img 
                  src={member.foto} 
                  alt={`Foto de ${member.nome}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '50%' }}
                />
              </div>

              <div className={styles.memberInfo}>
                <h3>{member.nome}</h3>
                <span className={styles.role}>
                  {member.cargo}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      <Footer className="my-teams-footer" />

      </section>
  )
}

      
