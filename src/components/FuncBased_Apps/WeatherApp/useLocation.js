import { useEffect, useState } from "react";

export function useLocation(city) {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    timezone: "",
    name: "",
    country_code: "",
  });
  useEffect(
    function () {
      async function getLocation() {
        try {
          const res = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
          );
          const geoResult = await res.json();

          if (!geoResult.results || geoResult.results.length === 0) {
            throw new Error("Location not found");
          }

          setLocation(geoResult.results[0]);
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      }

      getLocation();
    },

    [city]
  );

  return [
    location.latitude,
    location.longitude,
    location.timezone,
    location.name,
    location.country_code,
  ];
}
