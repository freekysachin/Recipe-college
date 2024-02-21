import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Auth/Login";
import Cart from "./components/UserCart/Cart";
import SignUp from "./components/Auth/SignUp";
import Mainpage from "./components/Main/Mainpage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Profile from "./components/Profile/Profile";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Mainpage />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Login" element={<Login />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="User" element={<Profile />} />
      <Route path="Recipe" element={<RecipeDetails />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
