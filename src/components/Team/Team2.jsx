import { FiUser, FiLinkedin, FiGithub, FiYoutube, FiMail } from 'react-icons/fi'
import styles from './Team.module.css'
// Importando corretamente da pasta src/assets/team/
import arthurImg from '../../assets/team/arthur.jpeg'
import endrewImg from '../../assets/team/endrew.jpeg'
import guilhermeImg from '../../assets/team/guilherme.jpeg'
import isaacImg from '../../assets/team/isaac.jpeg'
import noemiImg from '../../assets/team/noemi.jpeg'

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

      {/* Rodapé integrado ao componente Team */}
      <footer className={styles.footer}>
        <div className={styles.containerFooter || styles.container}>
          
          {/* Coluna Central 1: Páginas */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Páginas:</h4>
            <ul className={styles.linkList}>
              <li><a href="/">Header</a></li>
              <li><a href="/sobre">Sobre a equipe</a></li>
              <li><a href="/mercado">Mercado</a></li>
              <li><a href="/projeto">Produto</a></li>
              <li><a href="/equipe">Sobre nós</a></li>
            </ul>
          </div>

          {/* Coluna Central 2: RotuScan */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>RotuScan:</h4>
            <ul className={styles.linkList}>
              <li><a href="#pitch">Pitch</a></li>
              <li><a href="#site">Site</a></li>
              <li><a href="#playstore">PlayStore</a></li>
            </ul>
          </div>

          {/* Coluna Direita: Redes Sociais */}
          <div className={styles.socialColumn}>
            <h4 className={styles.columnTitle}>Nossas redes:</h4>
            <div className={styles.socialIcons}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FiYoutube /></a>
              <a href="mailto:contato@saluscore.com"><FiMail /></a>
            </div>
          </div>

        </div>
      </footer>
    </section>
  )
}
