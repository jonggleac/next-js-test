import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function AboutPage() {
  const name = 'yeop'

  return (
    <div className={styles.container}>
      <Head>
        <title> About </title>
      </Head>

      <h1 className={styles.homeTitle}>About Page !</h1>
    </div>
  )
}
