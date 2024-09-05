import { useState } from "react";
import authService from "../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserStatus } from "./../userState/userSlice";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // inititate the state of login from Redict store. And redux store starts by finding login value from DB
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // Set dispatcher for toggling login status
  const dispatch = useDispatch();

  // This function is responsible for LOGIN
  async function loginHandler(e) {
    e.preventDefault();

    //in case user logins with empty email or password
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");

    // login process starts here
    try {
      await authService.login({
        email,
        password,
      });
      dispatch(toggleUserStatus());
    } catch (error) {
      dispatch(toggleUserStatus());
      setError(error.message);
    }
  }

  // This function is responsible for LOGOUT
  const logoutUser = async () => {
    await authService.logout();
    dispatch(toggleUserStatus());
  };

  return (
    <>
      {!isLoggedIn && (
        <form onSubmit={loginHandler}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
      {isLoggedIn && <button onClick={logoutUser}>Log Out</button>}

      {error && <p>{error}</p>}
    </>
  );
}

export default Login;
