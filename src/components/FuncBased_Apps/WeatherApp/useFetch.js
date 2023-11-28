import { useEffect, useState } from "react";
import { useLocation } from "./useLocation";

export function useFetch(city) {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [lat, long, timezone, name, c_code] = useLocation(city);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );

        const data = await res.json();
        setWeatherData(data.daily);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [lat, long, timezone]);

  return [weatherData, name, c_code, isLoading];
}
