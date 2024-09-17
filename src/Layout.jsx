import { Outlet } from "react-router-dom";
import { Navbar, Topbar, Footer } from "./components/index.js";
import { _navbar, _footer, _topbar } from "./constants/sectionController";

function Layout() {
  return (
    <>
      {_topbar && <Topbar />}
      {_navbar && <Navbar />}
      <Outlet />
      {_footer && <Footer />}
    </>
  );
}

export default Layout;
