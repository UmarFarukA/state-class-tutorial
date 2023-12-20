import PageNav from "../../components/PageNav";
import styles from "./HomePage.module.css";
import "../../index.css";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PageNav />
      <main className={styles.heroSection}>
        <section className={styles.hero}>
          <h2 className={styles.heading}>
            You travel the world. <br />
            WorldWise keeps track of your adventures.
          </h2>
          <div className={styles.subHeading}>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wondered the world.
          </div>

          <NavLink to="app">
            <button className="btn">Start tracking now</button>
          </NavLink>
        </section>
      </main>
    </div>
  );
}
