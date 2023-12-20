import PageNav from "../../components/PageNav";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <PageNav />
      <main className={styles.loginPanel}>
        <div className={styles.inputField}>
          <label>Email Address</label>
          <input type="email" placeholder="example@example.com" />
        </div>
        <div className={styles.inputField}>
          <label>Password</label>
          <input type="password" placeholder="**************" />
        </div>
        <button className="login">Login</button>
      </main>
    </div>
  );
}
