import { useState } from "react";
import authService from "./appwrite/auth";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  // function loginUser() {
  //   // authService.login({
  //   //   email: "ali333291@gmail.com",
  //   //   password: "Baffa123$",
  //   // });
  //   console.log(authService.getCurrentUser());

  //   setUser(12);
  // }

  const loginUser = async () => {
    setError("");
    try {
      const session = await authService.login({
        email: "ali333291@gmail.com",
        password: "Baffa123$",
      });
      console.log("session", session);
      // if (session) {
      //   const userData = await authService.getCurrentUser();
      //   if (userData) {
      //     setUser(userData);
      //     console.log(userData);
      //   } else {
      //     console.log("didn;g");
      //   }
      // }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const logoutUser = async () => {
    authService.logout();
  };
  return (
    <>
      <Login />
    </>
  );
}

export default App;
