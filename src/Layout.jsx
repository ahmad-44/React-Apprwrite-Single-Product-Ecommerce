import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { _navbar, _footer } from "./constants/sectionController";
function Layout() {
  return (
    <>
      {_navbar && <Navbar />}
      <Outlet />
      {_footer && <Footer />}
    </>
  );
}

export default Layout;
