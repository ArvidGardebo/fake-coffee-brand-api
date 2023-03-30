import Link from "next/link";
import global from "../styles/global.module.scss";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (

    <div className={styles.navbar}>
      <nav className={styles.navbarContainer}>
        <img
          className={styles.logo}
          src="Fake_Api_Logo.svg"
          alt="Logo of a coffe cup."
        />

        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} href="/docs">
              Docs
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} href="https://github.com/">
              Github
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} href="">
              Buy us a coffee
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
