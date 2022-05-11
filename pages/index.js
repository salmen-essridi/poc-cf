import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home({ date }) {


  const [statusMessage, setStatusMessage] = useState("Anonymous");

  const login = () => {
    fetch("/api/login")
      .then((response) => response.json())
      .then((response) => {
        setStatusMessage(response.name);
      })
      .catch(() => {
        setStatusMessage("ERROR");
      });
  };


  const logout = () => {
    fetch("/api/logout")
      .then((response) => response.json())
      .then((response) => {
        setStatusMessage('Anonymous');
      })
      .catch(() => {
        setStatusMessage("ERROR");
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


        <h1 className={styles.title}>
          Welcome to {statusMessage}
        </h1>

        <p className={styles.description}>
            SSR time : { date  }
        </p>


        {statusMessage == "Anonymous" && <button onClick={login}>login</button>}
        {statusMessage != "Anonymous" && <button onClick={logout}>logout</button>}


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

export async function getServerSideProps() {



  const date =  new Date().toISOString() ; 

  return { props: {date }}
}
