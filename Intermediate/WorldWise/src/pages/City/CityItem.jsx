/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css";

export default function CityItem({ city }) {
  console.log(city);
  return (
    <div className={styles.locations}>
      <div className={styles.country}>
        <span>{city.emoji}</span>
        <p>{city.country}</p>
      </div>
      <div className={styles.details}>
        <p>{city.date.split("T")[0]}</p>
        <span className={styles.delete}>&times;</span>
      </div>
    </div>
  );
}
