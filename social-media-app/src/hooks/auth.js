import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "lib/firebase";
import { useState, useEffect } from "react";
import { DASHBOARD, LOGIN } from "lib/routers";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";
import isUsernameExists from "utils/isUsernameExists";

export const useAuth = () => {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const ref = doc(db, "users", authUser.uid); // doc() is to read from db
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false); // getDoc() to fetch the data
    };
    // after fetching the data, meaning authload is false, will process data
    if (!authLoading) {
      if (authUser) {
        fetchData(); // call this function when there is user
      } else setLoading(false); //not signed in
    }
  }, [authLoading]);

  return { user, isLoading: isLoading, error: error };
};

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const login = async ({ email, password, redirectTo = DASHBOARD }) => {
    // receive an object
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

export const useRegister = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const register = async ({
    username,
    email,
    password,
    redirectTo = DASHBOARD,
  }) => {
    setLoading(true);

    const usernameExists = await isUsernameExists(username);

    if (usernameExists) {
      toast({
        title: "Username already exists",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      setLoading(false);
      return false;
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          date: Date.now(),
        });

        toast({
          title: "Account created",
          message: "You are logged in",
          status: "success",
          isClosable: true,
          position: "top",
          duration: 5000,
        });
        navigate(redirectTo);
      } catch (error) {
        toast({
          title: "Sign Up failed",
          description: error.message,
          status: "error",
          isClosable: true,
          position: "top",
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
    }
  };
  return { register, isLoading };
};

export const useLogout = () => {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();
  const toast = useToast();
  const logout = async () => {
    if (await signOut()) {
      toast({
        title: "Successfully logged out",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate(LOGIN);
    }
    // else show error if not be able to log out
  };
  return { logout, isLoading };
};
