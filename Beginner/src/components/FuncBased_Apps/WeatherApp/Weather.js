import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("Kano");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Classy Weather</h2>
        <Input city={city} handleCity={handleCity} />
        <span className="country-name">
          Weather {country ? `${country} ${convertToFlag(code)}` : ""}
        </span>
        <WeatherDetails
          city={city}
          setCountry={setCountry}
          setCode={setCode}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}

function Input({ city, handleCity }) {
  return (
    <div className="city-input">
      <input
        type="text"
        placeholder="City Name"
        value={city}
        onChange={handleCity}
      />
    </div>
  );
}

function Loader() {
  return (
    <>
      <p className="loader">Loading...</p>
    </>
  );
}

function Error({ message }) {
  return (
    <>
      <p className="loader">{message}</p>
    </>
  );
}

function WeatherDetails({ city, setCountry, setCode, setIsLoading }) {
  const [weatherData, countryName, code, isLoading] = useFetch(city);
  console.log(weatherData);
  useEffect(() => {
    if (weatherData) {
      setCountry(countryName);
      setCode(code);
      setIsLoading(false);
    }
  }, [weatherData, countryName, code, setCountry, setCode, setIsLoading]);

  if (isLoading) {
    return <Loader />;
  }

  if (!weatherData) {
    return <Error message="No weather data available." />;
  }

  return (
    <ul className="weather-list">
      {weatherData.time.map((date, i) => (
        <Detail
          key={i}
          max={weatherData.temperature_2m_max.at(i)}
          min={weatherData.temperature_2m_min.at(i)}
          date={date}
          isToday={i === 0}
        />
      ))}
    </ul>
  );
}

function Detail({ min, max, date, isToday }) {
  return (
    <li className="weather-item">
      <span>{min > 20 ? "☁️" : "🌥️"}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>
        {`${Math.ceil(min)}`}&#176; - {`${Math.ceil(max)}`}&#176;
      </p>
    </li>
  );
}

export default Weather;

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
