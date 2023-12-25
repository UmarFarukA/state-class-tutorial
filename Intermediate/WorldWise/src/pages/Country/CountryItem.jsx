/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

export default function CountryItem({ country }) {
  return (
    <li className={styles.country}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
