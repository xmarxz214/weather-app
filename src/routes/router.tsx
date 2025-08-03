import App from "@/App";
import Layout from "@/components/layout";
import CityPage from "@/Pages/city-page";
import WeatherDashboard from "@/Pages/weather-dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <WeatherDashboard />,
      },
      {
        path: "/city/:cityName",
        element: <CityPage />,
      },
    ],
  },
  {
    path: "test",
    element: <App />
  }
]);

export default router;
