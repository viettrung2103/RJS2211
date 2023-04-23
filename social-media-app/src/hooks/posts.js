import { uuidv4 } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const addPost = async (post) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "post", id), {
      // to set id with our own id, , addDoc use auto generated id from firebase, bad practice
      ...post,
      id, // post's id
      date: new Date().toISOString(),
      likes: [], // array of users's uid that like this post
    });
    setLoading(false);
    toast({
      title: "Post added successfully",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });
  };
  return { addPost, isLoading };
}
