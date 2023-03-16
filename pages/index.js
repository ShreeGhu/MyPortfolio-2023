import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import FixedSentence from "../components/FixedSentence";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shree-Gumanju99</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <Main />

      <About />
      <Skills />
      <Projects />
      <Contact />
  
    </>
  );
}
