import React from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function MainLayout() {
	return (
		<div className="page-container">
			<NavBar />

			<div className="main-content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
