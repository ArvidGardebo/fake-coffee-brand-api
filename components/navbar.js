import Link from "next/link";
import global from "../styles/global.module.scss";
import styles from "../styles/navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.navbarContainer}>
        <img
          className={styles.logo}
          src={props.src}
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
      <div className={styles.footer_icons}>
        <div className={styles.footer_built_with}>Built with</div>
        <img src="React.svg" alt="React logo" />
        <img src="typescript.svg" alt="Typescript logo" />
        <img src="MongoDb.svg" alt="MongoDB logo" />
        <img src="nextjs.svg" alt="Next js Logo" />
      </div>

      <div className={styles.footer_text}>
        <h3>Made by</h3>
        <div className={styles.made_by}>
          <span>Arvid Gärdebo</span>
          <span>Joel Holsner</span>
          <span>Josef Abdo</span>
        </div>
      </div>
    </div>
  );
};
