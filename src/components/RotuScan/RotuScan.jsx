import styles from './RotuScan.module.css'

export default function RotuScan() {
  return (
    <section className={styles.rotuscan} id="projeto">
      
      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.projectLabel}>
            <span>NOSSO PROJETO</span>
            <span className={styles.labelLine}></span>
          </div>

          <h2 className={styles.logoTitle}>
            Rotu<span>Scan</span>
          </h2>

          <h3>
            Sua segurança
            <br />
            no <span>carrinho de compras.</span>
          </h3>

          <p className={styles.description}>
            O <strong>RotuScan</strong> foi criado para ajudar pessoas com
            restrições alimentares a fazer escolhas mais seguras.
            <br />
            Através da leitura dos rótulos, o sistema identifica
            substâncias como glúten, lactose e amendoim, além de
            sugerir produtos alternativos e receitas adequadas.
            <br />
            A proposta é tornar o dia a dia mais simples, acessível
            e seguro, unindo tecnologia e bem-estar.
          </p>

          <a href="#projeto" className={styles.button}>
            Conheça o RotuScan <span>→</span>
          </a>

          <div className={styles.steps}>
            <span className={styles.stepLine}></span>
            <span>ESCANEIE</span>
            <span>•</span>
            <span>DESCUBRA</span>
            <span>•</span>
            <span>ESCOLHA</span>
          </div>

        </div>

        <div className={styles.visual}>
          <img
            src="/images/rotuscan-mockup.png"
            alt="Aplicativo RotuScan exibido em um smartphone"
          />
        </div>

      </div>
    </section>
  )
}