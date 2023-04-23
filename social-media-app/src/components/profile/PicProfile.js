import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routers";

export default function PicProfile({ user, size = "lg" }) {
  // if fetching user, will not load avatar
  return (
    <Avatar
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      name={user.username}
      size={size}
      src={user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}
