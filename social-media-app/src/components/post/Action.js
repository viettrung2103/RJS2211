import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useToggleLike } from "hooks/posts";

export default function Action({ post }) {
  const { id, likes } = post;
  const { user, isLoading: userLoading } = useAuth();
  const isLiked = likes.includes(user?.id);

  const configObj = {
    id, // post id
    isLiked,
    uid: user?.id, // current user id
  };
  const { toggleLike, isLoading: likeLoading } = useToggleLike(configObj);

  // const isLiked = false;
  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          isRound
        />
        {likes.length}
      </Flex>
    </Flex>
  );
}
