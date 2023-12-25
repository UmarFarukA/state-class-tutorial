/* eslint-disable react/prop-types */
import styles from "./CountriesList.module.css";
import Loading from "../../components/Loading";
import CountryItem from "./CountryItem";

export default function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Loading />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.lists}>
      {countries.map((country) => (
        <CountryItem key={country} country={country} />
      ))}
    </ul>
  );
}
