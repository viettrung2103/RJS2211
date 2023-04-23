import { Box, Text } from "@chakra-ui/react";
import Post from "./index";

export default function PostLists({ posts }) {
  return (
    <Box px="4" align="center">
      {posts?.length === 0 ? (
        <Text textAlign="center">
          {" "}
          No posts yet... Feeling a little lonely here
        </Text>
      ) : (
        posts?.map((post) => <Post key={post.id} post={post} />)
      )}
    </Box>
  );
}
