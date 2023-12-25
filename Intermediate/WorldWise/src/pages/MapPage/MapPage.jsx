import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./MapPage.module.css";

export default function MapPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <div
      className={styles.map}
      onClick={(e) => {
        e.preventDefault();
        navigate("form");
      }}
    >
      <h2>Map goes here</h2>
      <p>
        {searchParams.get("lat")} &nbsp; {searchParams.get("lng")}
      </p>
    </div>
  );
}
