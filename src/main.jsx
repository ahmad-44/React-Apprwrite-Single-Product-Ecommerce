import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import ProtectedLayout from "./components/admin/ProtectedLayout.jsx";
import Login from "./components/admin/Login.jsx";
import { Provider } from "react-redux";
import store from "./reduxStore/store.js";
import { Toaster } from "react-hot-toast";

import {
  About,
  Account,
  Analytics,
  Home,
  Orders,
  PrintSlips,
} from "./components/pages/index.js";
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
        <Route path="/star" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/print-slips" element={<PrintSlips />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster />
    <RouterProvider router={router} />
  </Provider>
);
