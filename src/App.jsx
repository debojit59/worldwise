import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CityList from "./components/Citylist";
import CountryList from "./components/Countrylist";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

function App() {
  const [cities, setCities] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const Base_URL = "http://localhost:9000/cities";

  function HandleDelete(id) {
    setCities((city) => city.filter((city) => city.id !== id));
  }

  useEffect(function () {
    async function FetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${Base_URL}`);
        if (!res.ok) throw new Error("Fetching failed");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    FetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={
              <CityList
                cities={cities}
                isloading={isloading}
                HandleDelete={HandleDelete}
              />
            }
          />
          <Route
            path="cities"
            element={
              <CityList
                cities={cities}
                isloading={isloading}
                HandleDelete={HandleDelete}
              />
            }
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isloading={isloading} />}
          />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
