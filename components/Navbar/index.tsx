import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from './style.module.scss';


const navigation = [
  { id: 1, title: 'Hello', path: '/' },
  { id: 2, title: 'Джинсы', path: '/category/denim' },
  { id: 3, title: 'Платья', path: '/category/clothes' },
];

const Navbar:FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link className={'/category/'+router.query.category === path ? styles.active : ""} key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
