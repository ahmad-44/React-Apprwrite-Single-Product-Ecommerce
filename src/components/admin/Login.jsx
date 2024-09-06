import { useEffect, useState } from "react";
import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserStatus } from "../../userState/userSlice";
import { useNavigate, useParams } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // inititate the state of login from Redict store. And redux store starts by finding login value from DB
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // Set dispatcher for toggling login status
  const dispatch = useDispatch();

  //after login, we should go to orders page. so create a navigation
  const navigate = useNavigate();
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
      navigate("/orders");
    } catch (error) {
      dispatch(toggleUserStatus());
      setError(error.message);
      navigate("/login");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {!isLoggedIn && (
        <form onSubmit={loginHandler} className=" flex flex-col gap-4 mb-40">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 w-96 outline-none rounded-md focus:bg-purple/5 outline outline-purple"
            placeholder="Email"
            id="email"
            required
          />

          <label htmlFor="password" className="font-medium">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 w-96 outline-none rounded-md focus:bg-purple/5 outline outline-purple"
            placeholder="Password"
            id="password"
            required
          />
          <button
            type="submit"
            className="bg-purple py-3 w-[80%] hover:bg-opacity-80 rounded-lg text-lg m-auto text-white mt-4"
          >
            Login
          </button>
        </form>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
