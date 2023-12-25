import { useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

export default function City() {
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.city}>
      <h2>City Name</h2>
      <p>
        {searchParams.get("lat")}, {searchParams.get("lng")}
      </p>
    </div>
  );
}
