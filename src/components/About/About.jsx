import {
  FiAlertCircle,
  FiStar,
  FiCode,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiBarChart2,
} from 'react-icons/fi'

import styles from './About.module.css'

const steps = [
  {
    icon: <FiAlertCircle />,
    title: 'Problema',
    description: 'Identificamos necessidades reais.',
    color: 'red',
  },
  {
    icon: <FiStar />,
    title: 'Ideia',
    description: 'Transformamos desafios em ideias.',
    color: 'purple',
  },
  {
    icon: <FiCode />,
    title: 'Protótipo',
    description: 'Criamos soluções digitais.',
    color: 'blue',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Solução',
    description: 'Entregamos resultados.',
    color: 'green',
  },
]

const values = [
  {
    icon: <FiUsers />,
    title: 'Experiência',
    description: 'Atendimento próximo e ágil.',
  },
  {
    icon: <FiZap />,
    title: 'Praticidade',
    description: 'Soluções que facilitam tarefas.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Inovação',
    description: 'Tecnologia e evolução contínua.',
  },
]

export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.container}>

        <span className={styles.label}>Sobre nós</span>

        <div className={styles.mainContent}>

          <div className={styles.textContent}>
            <h2>
              Quem é a <span>SalusCore?</span>
            </h2>

            <p className={styles.intro}>
              Somos uma equipe formada por estudantes de tecnologia,
              que transforma ideias e problemas reais em soluções
              digitais simples, funcionais e relevantes.
            </p>

            <div className={styles.steps}>
              {steps.map((step, index) => (
                <div className={styles.stepGroup} key={step.title}>
                  <div className={styles.step}>
                    <div
                      className={`${styles.stepIcon} ${styles[step.color]}`}
                    >
                      {step.icon}
                    </div>

                    <strong>{step.title}</strong>
                    <small>{step.description}</small>
                  </div>

                  {index !== steps.length - 1 && (
                    <span className={styles.arrow}>→</span>
                  )}
                </div>
              ))}
            </div>

            <p className={styles.closing}>
              Da ideia ao protótipo, desenvolvemos produtos pensando
              em quem realmente vai utilizá-los.
            </p>
          </div>

          <div className={styles.imageContent}>
            <img
              src="/images/saluscore-illustration.png"
              alt="Ilustração de tecnologia e desenvolvimento digital"
            />
          </div>

        </div>

        <div className={styles.values}>
          {values.map((value) => (
            <div className={styles.value} key={value.title}>
              <div className={styles.valueIcon}>
                {value.icon}
              </div>

              <div>
                <strong>{value.title}</strong>
                <small>{value.description}</small>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}