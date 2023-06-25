import { FC } from "react";
import styles from './style.module.scss';


const Footer: FC = () => (
  <footer className={styles.footer}>
    <h3>Created by Gragert</h3>
    <div className={styles.contacts}>
      <h4>Contacts: </h4>
      <a href="https://t.me/gragert_vd" target="_blank" >Telegrem</a>
      <a href="https://github.com/GragertVD" target="_blank" >GitHub</a>
    </div>
  </footer>
);

export default Footer;
