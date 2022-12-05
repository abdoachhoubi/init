import Head from "next/head";
import { Header, Main, Footer } from "../containers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>init - acronym finder</title>
        <meta
          name="description"
          content="Acronym finder, it finds meanings of all acronyms including WTF? -> Where's The Food?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
