import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signTheUserOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    return () => unSubscribe();
  }, [auth]);

  const authInfo = {
    user,
    signInWithGoogle,
    signTheUserOut,
    isLoading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
