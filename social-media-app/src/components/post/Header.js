import { Button, Flex, Text, Box } from "@chakra-ui/react";
import PicProfile from "components/profile/PicProfile";
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";
import UsernameButton from "../profile/UsernameButton";

export default function Header({ uid, date }) {
  const { user, isLoading } = useUser(uid);
  if (isLoading) return "Loading...";
  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.100"
    >
      <PicProfile user={user} size="md" />
      <Box ml="4">
        <UsernameButton user={user} />
        <Text fontSize="sm" color="gray.500">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
}
