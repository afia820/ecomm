import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skatr Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Skatr Shoppin</a>
        </h1>

        <p className={styles.description}>The place to get some skates!</p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="https://nextjs.org/docs">
              <img src="/images/jungle.png" alt="Moxi Jungle Skates" />
              <h3>Moxi Jungle Roller Skate</h3>
              <p>
                The Moxi Jungle Skates are brown leopard print vinyl skates,
                vegan friendly, and ready to roll.
              </p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="https://github.com/vercel/next.js/tree/master/examples">
              <img
                src="/images/watermelon.png"
                alt="Beach Bunny Watermelon Skates"
              />
              <h3>Beach Bunny Roller Skates - Watermelon</h3>
              <p>
                Features a traditional high top boot including drum-dyed vinyl
                uppers and additional ankle padding that provides comfort and
                security.
              </p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <img
                src="/images/black-suede.png"
                alt="Lolly Black Suede Skates"
              />
              <h3>Lolly Outdoor Complete - Classic Black Suede</h3>
              <p>
                Moxi Lolly Black Skates are a mid-range lifestyle skate,
                designed for recreation and street skating.
              </p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
