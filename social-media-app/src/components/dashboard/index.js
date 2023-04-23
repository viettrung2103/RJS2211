import { Box, HStack, Heading, Button, Textarea } from "@chakra-ui/react";
import React from "react";
import TextareaAutoSize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAddPost } from "hooks/posts";
import { useAuth } from "hooks/auth";

export default function Dashboard() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: PostLoading } = useAddPost(); // loading state when getting post
  const { user, isLoading: authLoading } = useAuth(); // loading state when getting user

  const handleAddPost = (data) => {
    addPost({
      userId: user.id, // user id of user who post the post
      text: data.text,
    });
    reset();
  };
  // when post is initializing and user is initializing, both user and post are undefined and both loadings are true
  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="teal"
            type="submit"
            isLoading={authLoading || PostLoading}
          >
            {/* need to add type="submit" to button so react hook form know about
            this button and handle accordingly Post */}
            Post
          </Button>
        </HStack>
        <Textarea
          name="text"
          as={TextareaAutoSize}
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          minRows={3}
          {...register("text", { required: true })}
        ></Textarea>
      </form>
    </Box>
  );
}
