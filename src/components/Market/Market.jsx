import { FiShield, FiFileText, FiClock } from 'react-icons/fi'
import styles from './Market.module.css'

const challenges = [
  {
    icon: <FiShield />,
    title: 'Segurança acima de tudo',
    description:
      'Em 4 de 4 entrevistas, o sentimento mais desejado ao usar um sistema de saúde foi o mesmo: confiança e segurança.',
  },
  {
    icon: <FiFileText />,
    title: 'Informação existe, mas não chega',
    description:
      'Em rótulos de alimentos, a lei já exige transparência, mas termos técnicos e letras pequenas tornam a informação inacessível na prática.',
  },
  {
    icon: <FiClock />,
    title: 'Processos ainda manuais',
    description:
      'Do profissional de saúde ao consumidor final: conferir informação, um item de cada vez, ainda consome tempo de quem cuida da saúde.',
  },
]

export default function Market() {
  return (
    <section className={styles.market} id="mercado">
      <div className={styles.container}>

        <div className={styles.sectionLabel}>
          <span>SALUSCORE</span>
          <div />
        </div>

        <h2>
          Onde queremos
          <span> atuar?</span>
        </h2>

        <p className={styles.intro}>
          A <strong>SalusCore</strong> foca em um mercado em que a falta
          de informação gera riscos e barreiras no dia a dia.
          Nosso objetivo é criar aplicações que promovam segurança,
          confiança, praticidade e acessibilidade. Ouvimos pessoas
          com perfis bem diferentes, e um padrão se repetiu sem que
          a gente perguntasse diretamente:
        </p>

        <div className={styles.cards}>
          {challenges.map((challenge) => (
            <article className={styles.card} key={challenge.title}>
              <div className={styles.cardIcon}>
                {challenge.icon}
              </div>

              <h3>{challenge.title}</h3>

              <p>{challenge.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}