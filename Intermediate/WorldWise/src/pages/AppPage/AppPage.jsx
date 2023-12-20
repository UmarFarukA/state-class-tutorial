import styles from "./AppPage.module.css";

export default function AppPage() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.sideBar}>
          <div className={styles.header}>
            <img src="/logo.png" />
            <div className={styles.topLinks}>
              <button>cities</button>
              <button>countries</button>
            </div>
            <div className={styles.locations}>
              <div className={styles.country}>
                <span>Flag</span>
                <p>Country Name</p>
              </div>
              <div className={styles.details}>
                <p>Date</p>
                <span>X</span>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            &copy; Copyright WorldWise Inc. {new Date().getFullYear()}
          </footer>
        </div>
        <div className={styles.map}>
          <p>Map goes here</p>
        </div>
      </main>
    </div>
  );
}
