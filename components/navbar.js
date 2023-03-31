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
          <li
            className={`${styles.navbar__item} ${styles.navbar_display_none}`}
          >
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

export const Footer = (props) => {
  return (
    <div className={styles.navbar__footer}>
      <h3>Made by</h3>
      <div className={styles.made_by}>
        <h3>Arvid Gärdebo</h3>
        <h3>Joel Holsner</h3>
        <h3>Josef Abdo</h3>
      </div>
    </div>
  );
};
