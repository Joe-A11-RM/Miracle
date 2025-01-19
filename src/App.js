import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import MainLayout from "./Components/MainLayout";
import Categories from "./Components/Categories/Categories";
import Aboutus from "./Components/Aboutus/Aboutus";
import ResearchDevelopment from "./Components/R&D/ResearchDevelopment";
import ExportTo from "./Components/ExportTo/ExportTo";
import OEM from "./Components/O.E.M/OEM";
import Contactus from "./Components/Contactus/Contactus";
import Purchase from "./Components/Purchase/Purchase";
import Products from "./Components/Products/Products";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "aboutus",
          element: <Aboutus />,
        },
        {
          path: "research-development",
          element: <ResearchDevelopment />,
        },
        {
          path: "export-to",
          element: <ExportTo />,
        },
        {
          path: "OEM",
          element: <OEM />,
        },
        {
          path: "contact-us",
          element: <Contactus />,
        },
        {
          path: "purchase",
          element: <Purchase />,
        },
        {
          path: "categories/:name",
          element: <Categories />,
        },
        {
          path: "products/:id",
          element: <Products />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
