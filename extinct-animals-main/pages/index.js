import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>General Knowledge</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <p className={styles.description}>
        Determining the extinction dates of organisms
        </p>

        <div className={styles.grid}>

          <Link href="about">
            <a className={styles.card}>About</a>
          </Link>

          <Link href="/start_page">
            <a className={styles.card}>Start</a>
          </Link>
        </div>
      </main>
    </div>
  )
}