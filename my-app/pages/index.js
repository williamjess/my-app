import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  return (
    <div>
      <Head>
        <title>william jess</title>
        <meta name="description" content="it's me" />
        <link rel="icon" href="/hammer.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300&display=swap" rel="stylesheet" />
        </Head>

      <main className={styles.main}>

        <img src="/me5.jpg" width="310" height="372"></img>

      <h1>william jess</h1>

        <b>about</b>
          <p>I'm living in Belfast, Northern Ireland.</p>
          <p>I like data analysis, dota2, and fitness.</p>

          <b>current</b>
          <p>Pursuing a career in the Fullstack or Data Analytics spaces.</p>

        <b>past</b>
        <p>University of Ulster Computer Science graduate</p>
        <p>Network engineer intern @ SERC Lisburn</p>
       
       
      <b>Contact</b>
      <p>Email: williamjessdev@gmail.com</p>
      <p>Phone: 07496884303</p>
      <p>Github: <a href="https://github.com/williamjess/">https://github.com/williamjess/</a></p>
      
       

      </main>
      <Analytics />

    </div>
  )
}
