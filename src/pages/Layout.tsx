import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <Navbar />

      <main className="flex items-center justify-center mt-25">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
