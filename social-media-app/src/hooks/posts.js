import { uuidv4 } from "@firebase/util";
import { collection, doc, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const addPost = async (post) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      // to set id with our own id, , addDoc use auto generated id from firebase, bad practice
      ...post,
      id, // post's id
      date: Date.now(),
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

export function usePosts() {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  // console.log("querry", q);
  const [posts, isLoading, error] = useCollectionData(q); // aray
  if (error) throw error;
  return { posts, isLoading };
}
