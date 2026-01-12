import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ScrollTop from "./content/ScrollTop";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import Service from "./page/Service";
import PortfolioPage from "./page/PortfolioPage";
const routeList = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={routeList}>
      <ScrollTop />
    </RouterProvider>
  );
}

export default App;
