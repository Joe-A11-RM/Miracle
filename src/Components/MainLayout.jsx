import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import ScrollTop from "./ScrollTop/ScrollTop";
import { Layout } from "antd";

export default function MainLayout() {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <ScrollTop />
      <NavBar />

      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </Layout>
  );
}
