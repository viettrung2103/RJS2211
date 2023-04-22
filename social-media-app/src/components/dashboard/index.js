import { Box, HStack, Heading, Button, Textarea } from "@chakra-ui/react";
import React from "react";
import TextareaAutoSize from "react-textarea-autosize";
import { useForm } from "react-hook-form";

export default function Dashboard() {
  const { register, handleSubmit, reset } = useForm();
  const handlePost = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handlePost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button colorScheme="teal" type="submit">
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
