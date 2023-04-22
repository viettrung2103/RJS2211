import {Box, Button, Code, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { USERS, PROTECTED } from "lib/routers";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "hooks/auth";
import PicProfile from "components/profile/PicProfile";

const ActiveUser = () => {
  const { user, isLoading } = useAuth();
  if (isLoading) return "Loading..."; // return loading when page is loading, otherwise page will crash
  console.log(user);
  return (
    // /protected/profile/:uid
    <Stack align="center" spacing="5" my="8">
      <PicProfile user={user} />
      {/* <Avatar
        as={RouterLink}
        to={`${PROTECTED}/profile/${user.id}`}
        name={user.username}
        size="xl"
        src={user.avatar}
        _hover={{ cursor: "pointer", opacity: "0.7" }}
      /> */}
      <Code>@{user.username}</Code>
      <Button
        colorScheme="teal"
        w="full"
        as={RouterLink}
        to={`${PROTECTED}/profile/${user.id}`}
      >
        Edit Profile
      </Button>
    </Stack>
  );
};

export default function Sidebar() {
  return (
    <Box
      px="6"
      height="100vh"
      w="100%"
      maxW="300px"
      borderLeft="1px solid"
      borderLeftColor="teal.100"
      position="sticky"
      top="16"
      display={{ base: "none", md: "block" }}
    >
      <ActiveUser />
      <Box align="center">
        <Box
          as="ul"
          borderBottom="2px solid"
          borderColor="teal.200"
          align="center"
        />
        <Button
          variant="outline"
          colorScheme="teal"
          as={Link}
          to={USERS}
          mt="4"
          size="sm"
        >
          All Users
        </Button>
      </Box>
    </Box>
  );
}
