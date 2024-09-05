import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Layout from "../Layout.jsx";
import ProtectedLayout from "./components/ProtectedLayout.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Login from "./components/Login.jsx";
import { Provider } from "react-redux";
import store from "./userState/store.js";

// Create router for open pages and protected (dashboard, login) pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
      {/* Protexted Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
