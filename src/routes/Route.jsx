import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Users from "../pages/Users/Users/Users";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/DashBoard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    // path: "https://anchorblock-task-murex.vercel.app/signup",
    path: "/signup",
    element: <SignUp />,
  },
  {
    // path: "https://anchorblock-task-murex.vercel.app/signin",
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
