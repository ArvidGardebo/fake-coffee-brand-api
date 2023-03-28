import Link from "next/link";
import global from "../styles/global.module.scss";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <h1>{"{ Fake Coffee API }"}</h1>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link href="/">
              <p className={styles.navbar__link}>Home</p>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/docs">
              <p className={styles.navbar__link}>Docs</p>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="https://github.com/">
              <p className={styles.navbar__link}>Github</p>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="">
              <p className={styles.navbar__link}>Buy us a coffee</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
