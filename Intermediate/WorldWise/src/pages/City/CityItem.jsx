/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

export default function CityItem({ city }) {
  console.log(city);
  return (
    <div>
      <Link
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={styles.locations}
      >
        <div className={styles.country}>
          <span>{city.emoji}</span>
          <p>{city.country}</p>
        </div>
        <div className={styles.details}>
          <p>{city.date.split("T")[0]}</p>
          <circle className={styles.delete}>&times;</circle>
        </div>
      </Link>
    </div>
  );
}
