import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function AboutPage() {
  const name = 'yeop'

  return (
    <div className={styles.container}>
      <Head>
        <title> About Me </title>
        <h1>Name : 이종엽</h1>
        <h1>Age : 23</h1>
        <h2>IG : yeoep_</h2>
      </Head>

      <h1 className={styles.homeTitle}>About Page !</h1>
    </div>
  )
}
