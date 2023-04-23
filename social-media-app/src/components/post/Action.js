import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import React from "react";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";
import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routers";

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
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);

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
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          // isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="teal"
          variant="ghost"
          icon={<FaComment />}
          isRound
        />
        5
      </Flex>
      <IconButton
        ml="auto"
        onClick={deletePost}
        isLoading={deleteLoading}
        size="md"
        colorScheme="red"
        variant="ghost"
        icon={<FaTrash />}
        isRound
      />
    </Flex>
  );
}
