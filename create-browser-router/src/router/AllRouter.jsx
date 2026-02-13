import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Details from "../pages/Details";
import Product from "../pages/Product";
import Mobile from "../pages/Mobile";
import Laptop from "../pages/Laptop";

export const AllRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: ":id",
        element: <Details />,
      },
      {
        path: "product",
        element: <Product />,
        children: [
          {
            path: "mobile",
            element: <Mobile />,
          },
          {
            path: "laptop",
            element: <Laptop />,
          },
        ],
      },
    ],
  },
]);
