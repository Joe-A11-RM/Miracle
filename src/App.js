import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import MainLayout from "./Components/MainLayout";
import Categories from "./Components/Categories/Categories";

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
