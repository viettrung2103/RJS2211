import { uuidv4 } from "@firebase/util";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import { db } from "lib/firebase";

export function UseAddComment({ postID }) {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const addComment = async (text) => {
    setLoading(true);
    const id = uuidv4(); // comment id
    const date = Date.now();
    const docRef = doc(db, "comments", id);

    await setDoc(docRef, { text, id, postID, date });
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
