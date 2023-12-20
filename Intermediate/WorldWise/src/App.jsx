import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import HomePage from "./pages/HomePage/HomePage";
import AppPage from "./pages/AppPage/AppPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="app" element={<AppPage />} />
      </Routes>
    </Router>
  );
}
