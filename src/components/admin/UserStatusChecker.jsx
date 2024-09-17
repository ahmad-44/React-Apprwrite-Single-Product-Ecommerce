import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { setUserLoggedIn } from "../../reduxStore/userSlice";

// this component will initially determine if user is loggedin or out.
function UserStatusChecker() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserStatus = async () => {
      const user = await authService.getCurrentUser();
      dispatch(setUserLoggedIn(Boolean(user)));
    };

    checkUserStatus();
  }, [dispatch]);

  return null; // This component doesn't render anything
}

export default UserStatusChecker;
