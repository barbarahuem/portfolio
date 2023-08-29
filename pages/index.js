import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Barbara Huemer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          I am Barbara Huemer
        </h1>
        <div className={styles.blur}>
        <img src="/img/3D_me.png" height={200}/>
          <div className={styles.circle}></div>
          <div className={styles.triangle}></div>
        </div>
        <div className={styles.circleGroup}> 
          <div className={styles.circleOne}></div>
          <div className={styles.circleTwo}></div>
          <div className={styles.circleThree}></div>
        </div>

        <section className={styles.intro}>
          <div className={styles.introBox}>
            <p className={styles.introText}>
              This is my digital space where I showcase my skills, <br/>
              experiences, and projects. Whether you stumbled upon this site <br/>
              accidentally or are here intentionally, I'm glad you stopped by!</p>
            <button>
              <a href="CV_Huemer-Barbara.pdf">CV</a>
            </button>
          </div>
        </section>

        <section className={styles.codingLanguages}>
          <h3 className={styles.codingText}>I am well versed in</h3>
          <div className={styles.grid}>

            <a className={styles.card}>
              <div className={styles.cardImg}>
                <img src="/img/logos/js.png"/>
              </div>
              <p>javascript</p>
            </a>

            <a className={styles.card}>
              <div className={styles.cardImg}>
                <img src="/img/logos/typescript.png"/>
              </div>
              <p>typescript</p>
            </a>

            <a className={styles.card}>
              <div className={styles.cardImg}>
                <img src="/img/logos/vue.png"/>
              </div>
              <p>vue</p>
            </a>

            <a className={styles.card}>
              <div className={styles.cardImg}>
                <img src="/img/logos/react.png"/>
              </div>
              <p>react</p>
            </a>

          </div>
        </section>
      </main>

      <footer>
        <p>Barbara Huemer</p>
      </footer>
    </div>
  )
}
