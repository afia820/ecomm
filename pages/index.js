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

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <img src="/images/jungle.png" alt="Moxi Jungle Skates" />
            <h3>Moxi Jungle Roller Skate</h3>
            <p>
              The Moxi Jungle Skates are brown leopard print vinyl skates, vegan
              friendly, and ready to roll.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <img
              src="/images/rainbow-rider.png"
              alt="Moxi Rainbow Rider Skates"
            />
            <h3>Rainbow Rider</h3>
            <p>
              The Moxi Rainbow Rider is designed for the beginning recreational
              skater looking for an outdoor roller skate packed with
              high-quality comfort at an affordable price.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <img
              src="/images/watermelon.png"
              alt="Beach Bunny Watermelon Skates"
            />
            <h3>Beach Bunny Roller Skates - Watermelon</h3>
            <p>
              The Beach Bunny features a traditional high top boot with
              thoughtful touches including drum-dyed vinyl uppers for more
              authentic color saturation and additional ankle padding that
              provides comfort and security whether you’re cruising down the
              boulevard or ripping up your favorite skate park.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <img src="/images/black-suede.png" alt="Lolly Black Suede Skates" />
            <h3>Lolly Outdoor Complete - Classic Black Suede</h3>
            <p>
              Moxi Lolly Black Skates are a mid-range lifestyle skate, designed
              for recreation and street skating.
            </p>
          </a>
        </div>
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
