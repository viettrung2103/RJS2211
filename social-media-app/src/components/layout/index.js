import { LOGIN } from "lib/routers";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/auth";
import Navbar from "components/layout/Navbar";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout() {
  // to check if the pathname start with specific name
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    //if the page is not loading and there is no user, return to login page
    if (!isLoading && pathname.startsWith("/protected" && !user)) {
      navigate(LOGIN); // navigate user to login page
      console.log("Protected Route");
    }
  }, [pathname, user, isLoading]); // whenever pathname change, this will work again
  if (isLoading) return "Getting data..";
  return (
    <>
      <Navbar />
      <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet />
        </Box>
        <Sidebar />
      </Flex>
    </>
  );
}
