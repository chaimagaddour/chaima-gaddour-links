import Head from "next/head";
import Header from "@components/Header/Header";
import Footer from "@components/Footer";
import styles from "./common.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chaima Gaddour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Header />
      </main>

      <Footer />
    </div>
  );
}
