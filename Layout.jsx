import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <p>Navbar goes here</p>
      <Outlet />
    </>
  );
}

export default Layout;
