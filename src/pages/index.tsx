import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Button from '@/components/button'
import Image from 'next/image'

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>jessejes | Home</title>
        <link rel="icon" href="/avatar.jpg" />
      </Head>
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.avatar}>
              <Image src="/avatar.jpg" alt="Avatar" width={102} height={102} />
            </div>
            <div className={styles.description}>
              <h1>jessejes</h1>
              <p>Keep it simple :)</p>
            </div>
            <Button text="more about me" href="/about" />
          </div>
        </div>
      </div>
    </>
  )
}
