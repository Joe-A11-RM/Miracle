import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import MainLayout from "./Components/MainLayout";
import Categories from "./Components/Categories/Categories";
import Aboutus from "./Components/Aboutus/Aboutus";
import ResearchDevelopment from "./Components/R&D/ResearchDevelopment";

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
          path: "categories/:name",
          element: <Categories />,
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
