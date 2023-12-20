import { NavLink, Link } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src="logo.png" alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/pricing" className={styles.navLink}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={styles.navLink}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={`${styles.navLink} login`}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
