import Head from 'next/head';
import styles from '../styles/Home.module.css';
import products from '../products.json';

export default function Home() {
  // console.log('<<<products', products);
  return (
    <div className={styles.container}>
      <Head>
        <title>Skatr Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Skatr Shop</a>
        </h1>
        <p className={styles.description}>The place to get some skates!</p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, description, image, price, id } = product;
            return (
              <li className={styles.card} key={id}>
                <a href="#">
                  <img src={image} alt="Moxi Jungle Skates" />
                  <h3>{title}</h3>
                  <p>{price}</p>
                  <p>{description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
