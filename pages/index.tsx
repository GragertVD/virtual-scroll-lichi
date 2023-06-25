import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FC } from "react";


const Hello: FC = () => (
  <>
    <Head>
      <title>Hello</title>
    </Head>
    <div className={styles.wrapper}>
      <h1>Hello, I&apos;m Vladimir Gragert</h1>
      <p>In this case, I developed a product catalog.<br></br>
        Attention was paid to optimizing data loading from an external API.
      </p>
      <strong>Technologies used:</strong>
      <ul>
        <li>Next js</li>
        <li>react-intersection-observer</li>
        <li>module.scss</li>
      </ul>

    </div>
  </>
);

export default Hello;
