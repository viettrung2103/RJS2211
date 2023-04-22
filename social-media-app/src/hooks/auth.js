import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "lib/firebase";
import { useState } from "react";
import { DASHBOARD } from "lib/routers";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [authUser, isLoading, error] = useAuthState(auth);

  return { user: authUser, isLoading: isLoading, error: error };
};

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const login = async ({ email, password, redirectTo = DASHBOARD }) => { // receive an object
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(email);
      toast({
        title: "You are logged in",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate(redirectTo);
    } catch (error) {
      toast({
        title: "Login is failed",
        description: error.message,
        status: "error",
        isClosable: true,
        positon: "top",
        duration: 5000,
      });
      setLoading(false);
      return false; // if login fail
    }

    return true; // return true if login succeeded
  };
  return { login, isLoading };
};
