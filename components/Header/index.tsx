import { FC } from "react";
import Navbar from "../Navbar";
import styles from './style.module.scss';


const Header: FC = () => (
  <>
    <div className={styles.headerDummy}></div>
    <header className={styles.wrapper}>
      <Navbar />
    </header>
  </>
);

export default Header;
