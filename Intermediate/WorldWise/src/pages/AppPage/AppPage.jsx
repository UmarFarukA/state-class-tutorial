import { NavLink, Outlet } from "react-router-dom";
import styles from "./AppPage.module.css";

export default function AppPage() {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.NavLink}>
        <img src="/logo.png" />
      </NavLink>
      <div className={styles.topLinks}>
        <NavLink to="cities" className={styles.NavLink}>
          Cities
        </NavLink>
        <NavLink to="countries" className={styles.NavLink}>
          Countries
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
