import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const timezoneOffset = {
  NL: 1
}

export async function getStaticProps({ params }) {
  return {
    props: {
      geo: params.geo
    },
    revalidate: 120,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default function Fixtures({ geo }) {
  const fixtureTime = new Date(2022, 7, 27, 15, 0, 0)
  const formattedFixtureTime = fixtureTime.toLocaleTimeString('en-GB'.language, {hour: '2-digit', minute:'2-digit'})

  const localTime = new Date(fixtureTime.setHours(fixtureTime.getHours() + (timezoneOffset[geo] || 0)))
  const formattedLocalTime = localTime.toLocaleTimeString('en-GB'.language, {hour: '2-digit', minute:'2-digit'})

  return (
    <div className={styles.container}>
      <Head>
        <title>Timezone caching</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Arsenal vs Chelsea</h1>

        <p>{formattedFixtureTime} BST - ({formattedLocalTime} { geo } time)</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
