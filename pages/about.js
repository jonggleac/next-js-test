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
      </Head>

      <h1 className={styles.homeTitle}>About Me !</h1>
      <h2>Name : 이종엽</h2>
      <h2>Age : 23</h2>
      <h3>IG : yeoep_</h3>
    </div>
  )
}
