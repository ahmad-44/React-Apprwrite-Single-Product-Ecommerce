import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { LoaderIcon } from "react-hot-toast";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Set loading to false after checking the authentication status
    if (isLoggedIn !== null) {
      // Assuming null indicates that the status is being checked
      setLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (loading) return; // Prevent navigation while loading
    if (isLoggedIn === false) {
      navigate("/star");
    } else if (isLoggedIn === true && window.location.pathname === "/star") {
      navigate("/orders");
    }
  }, [isLoggedIn, navigate, loading]);
  if (loading) {
    return (
      <div className="flex items-center mt-10 justify-center">
        <LoaderIcon />
      </div>
    ); // Show a loading indicator while checking
  } else {
    return (
      <>
        <div className="flex">
          {isLoggedIn && <Sidebar />}
          <Outlet />
        </div>
      </>
    );
  }
}
