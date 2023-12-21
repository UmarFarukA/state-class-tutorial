import MapPage from "../pages/MapPage/MapPage";
import SideBarPage from "../pages/SideBarPage/SideBarPage";
import styles from "./AppPageLayout.module.css";
export default function AppPageLayout() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <SideBarPage />

        <MapPage />
      </main>
    </div>
  );
}
