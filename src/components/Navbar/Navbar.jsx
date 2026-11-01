import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Mercado', href: '#mercado' },
  { label: 'Projeto', href: '#projeto' },
  { label: 'Equipe', href: '#equipe' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#inicio" aria-label="SalusCore — início" onClick={closeMenu}>
        <img src="/images/saluscore-mark.svg" alt="" />
        <span>SalusCore</span>
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
