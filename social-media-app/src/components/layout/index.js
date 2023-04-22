import { LOGIN } from "lib/routers";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/auth";
import Navbar from "components/navbar";

export default function Layout() {
  // to check if the pathname start with specific name
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (pathname.startsWith("/protected" && !user)) {
      navigate(LOGIN); // navigate user to login page
      console.log("Protected Route");
    }
  }, [pathname]); // whenever pathname change, this will work again
  if (isLoading) return "Loading";
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
