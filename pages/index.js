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

        <div className={styles.intro}>
          <p className={styles.introText}>This is my digital space where I showcase my skills, 
            experiences, and projects. Whether you stumbled upon this site 
            accidentally or are here intentionally, I'm glad you stopped by!</p>
          <button>
            <a className={styles.button} href="CV_Huemer-Barbara.pdf">CV</a>
          </button>
        </div>

        <div className={styles.grid}>

          <a className={styles.card}>
            <img src="/img/logos/js.png"/>
            <p>javascript</p>
          </a>

          <a className={styles.card}>
            <img src="/img/logos/typescript.png"/>
            <p>typescript</p>
          </a>

          <a className={styles.card}>
            <img src="/img/logos/vue.png"/>
            <p>vue</p>
          </a>

          <a className={styles.card}>
            <img src="/img/logos/react.png"/>
            <p>react</p>
          </a>

        </div>
      </main>

      <footer>
        <p>Barbara Huemer</p>
      </footer>
    </div>
  )
}
