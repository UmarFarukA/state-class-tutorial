import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; Copyright WorldWise Inc. {new Date().getFullYear()}
    </footer>
  );
}
