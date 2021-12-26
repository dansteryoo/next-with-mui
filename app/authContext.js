/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { auth } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithRedirect,
} from 'firebase/auth';
import { toastFirebaseError } from 'helpers/errors';

const AuthContext = React.createContext();

export const handleAuth = async (authFunction) => {
  try {
    await authFunction();
  } catch (err) {
    toastFirebaseError({ err });
  }
};

export const logInWithOauth = async ({ oAuthProvider }) => {
  try {
    const provider = new oAuthProvider();
    await signInWithRedirect(auth, provider);
    // const result = await signInWithRedirect(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = await oAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // console.log({ result, token, user });
  } catch (err) {
    toastFirebaseError({ err });
  }
};

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password); // return a promise
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // added event listener
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
