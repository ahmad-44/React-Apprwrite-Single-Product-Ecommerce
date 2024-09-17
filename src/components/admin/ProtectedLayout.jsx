import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
export default function ProtectedLayout() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // console.log(isLoggedIn);
  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/star");
    } else if (isLoggedIn === true && window.location.pathname === "/star") {
      navigate("/orders");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="flex">
        {isLoggedIn && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
}
