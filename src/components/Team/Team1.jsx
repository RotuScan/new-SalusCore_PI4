import { FiUser } from 'react-icons/fi'
import styles from './Team.module.css'

const members = [
  {
    name: 'Arthur Albino',
    role: 'DEV',
    color: 'blue',
  },
  {
    name: 'Endrew Lemos',
    role: 'UI / UX DESIGN',
    color: 'pink',
  },
  {
    name: 'Guilherme Bittencourt',
    role: 'BACK-END',
    color: 'blue',
  },
  {
    name: 'Isaac Hidel',
    role: 'FRONT-END',
    color: 'pink',
  },
  {
    name: 'Noemi Tejada',
    role: 'PRODUCT OWNER',
    color: 'blue',
  },
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
            <article className={styles.member} key={member.name}>
              <div
                className={`${styles.avatar} ${styles[member.color]}`}
              >
                <FiUser />
              </div>

              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>

                <span className={styles.role}>
                  {member.role}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}