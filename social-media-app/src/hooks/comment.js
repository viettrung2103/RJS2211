import { uuidv4 } from "@firebase/util";
import { useState } from "react";
import { setDoc, doc, collection, query, where } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import { db } from "lib/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function UseAddComment({ postID, uid }) {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const addComment = async (text) => {
    setLoading(true);
    const id = uuidv4(); // comment id
    const date = Date.now();
    const docRef = doc(db, "comments", id);

    await setDoc(docRef, { text, id, postID, date, uid });
    toast({
      title: "Comment added",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });
    setLoading(false);
  };

  return { addComment, isLoading };
}

// get all comments belongs to this post id
export function useComments(postID) {
  const q = query(collection(db, "comments", where("postID", "==", postID)));
  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments, isLoading };
}
