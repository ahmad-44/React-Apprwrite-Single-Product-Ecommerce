import { useState } from "react";
import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserStatus } from "../../reduxStore/userSlice";
function Logout() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // Set dispatcher for toggling login status
  const dispatch = useDispatch();
  // This function is responsible for LOGOUT
  const logoutUser = async () => {
    await authService.logout();
    dispatch(toggleUserStatus());
  };
  return (
    <>
      {isLoggedIn && (
        <div className="text-white flex flex-col gap-4">
          <button
            onClick={logoutUser}
            className="bg-purple py-3 w-[80%] hover:bg-opacity-80 rounded-lg text-lg m-auto text-white"
          >
            LogOut
          </button>
        </div>
      )}
    </>
  );
}

export default Logout;
