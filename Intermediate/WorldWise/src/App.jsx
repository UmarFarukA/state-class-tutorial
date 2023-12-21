import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AppPageLayout from "./components/AppPageLayout";
import { useEffect, useState } from "react";
import CitiesList from "./pages/City/CitiesList";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:5000";

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch (error) {
        alert("Error fetching cities");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="app" element={<AppPageLayout />}>
          <Route
            path="cities"
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={isLoading} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
