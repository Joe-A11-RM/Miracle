import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  let routes = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
