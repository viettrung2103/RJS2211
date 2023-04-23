import Login from "components/auth/Login";
import Register from "components/auth/Register";
import Comments from "components/comments";
import Dashboard from "components/dashboard";
import Layout from "components/layout";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id"; // post id

export const router = createBrowserRouter([
  { path: ROOT, element: "Public Root" },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  // { path: DASHBOARD, element: <Dashboard /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      { path: DASHBOARD, element: <Dashboard /> },
      { path: USERS, element: "Users" },
      { path: PROFILE, element: `User profile for a specific id` },
      { path: COMMENTS, element: <Comments /> },
    ],
  },
]);
