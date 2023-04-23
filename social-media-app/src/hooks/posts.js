import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

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

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);
  const toggleLike = async () => {
    setLoading(true);
    const docRef = doc(db, "posts", id);
    // arrayRemove: remove item from array
    //arrayUnion(): add item to array
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    // when a post is liked at first, press like >> remove id
    // when a post is not liked at first, press like >> add id

    setLoading(false);
  };
  return { toggleLike, isLoading };
}

export function useDeletePost(id) {
  const [isLoading, setLoading] = useState(false);
  async function deletePost(id) {}
  return { deletePost, isLoading };
}

export function usePost(id) {
  const q = doc(db, "posts", id);
  const [post, isLoading] = useDocumentData(q);

  return { post, isLoading };
}

export function usePosts() {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  // console.log("querry", q);
  const [posts, isLoading, error] = useCollectionData(q); // aray
  if (error) throw error;
  return { posts, isLoading };
}
