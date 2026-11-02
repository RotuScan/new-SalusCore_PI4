import React from 'react'
import styles from './Footer.module.css'
import { FiLinkedin, FiGithub, FiYoutube, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Coluna Esquerda: Logo e Direitos */}
        <div className={styles.brandColumn}>
          <div className={styles.logoRow}>
            <FiHeart className={styles.footerLogoIcon} />
            <span className={styles.brandName}>SalusCore</span>
          </div>
          <p className={styles.rights}>
            Todos os direitos reservados ©2026 SalusCore
          </p>
        </div>

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
  )
}