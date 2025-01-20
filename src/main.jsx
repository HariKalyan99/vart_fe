import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage.jsx";
import SignupPage from "./components/pages/SignupPage.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import CreateNew from "./components/pages/CreateNew.jsx";
import CardDetails from "./components/pages/CardDetails.jsx";
import OpeningPage from "./components/pages/OpeningPage.jsx";
import ProfilePage from "./components/pages/ProfilePage.jsx";
import ForgotPwdPage from "./components/pages/ForgotPwdPage.jsx";
import { Provider } from "react-redux";
import { zootopiaStore } from "../store/zootopiaStore.js";
import { Slide, ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <OpeningPage /> },
      { path: "/register", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot-pwd", element: <ForgotPwdPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/create", element: <CreateNew /> },
      { path: "/details/:id", element: <CardDetails /> },
      { path: "/profile/:id", element: <ProfilePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={zootopiaStore}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
  </StrictMode>
);
