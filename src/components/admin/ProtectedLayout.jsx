import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
export default function ProtectedLayout() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    } else if (isLoggedIn === true && window.location.pathname === "/login") {
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
