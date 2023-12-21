import styles from "./SideBarPage.module.css";
import Footer from "../Footer/Footer";
import AppPage from "../AppPage/AppPage";
// import { Outlet } from "react-router-dom";

export default function SideBarPage() {
  return (
    <div className={styles.sideBar}>
      <AppPage />
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}
