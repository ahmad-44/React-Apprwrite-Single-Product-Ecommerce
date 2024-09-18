import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserStatus } from "../../reduxStore/userSlice";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Logout({ label }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  // Set dispatcher for toggling login status
  const dispatch = useDispatch();
  // This function is responsible for LOGOUT
  const logoutUser = async () => {
    await authService.logout();
    dispatch(toggleUserStatus());
    navigate("/star", { replace: true });
  };
  return (
    <>
      {isLoggedIn && (
        <div className="text-white flex flex-col w-full">
          <button
            onClick={logoutUser}
            className="bg-purple py-3 w-[80%] hover:bg-opacity-80 rounded-lg text-lg m-auto text-white"
          >
            {label}
          </button>
        </div>
      )}
    </>
  );
}

export default Logout;
