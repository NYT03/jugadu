import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  console.log('running useAuth');
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setCurrentUser(user);
        setLoading(false);
      }
      else
      {
        console.log('no user');
        setLoading(false);
      }
    });

    return unsubscribe;
  },[]);

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      console.log('User signed up successfully:', userCredential.email);
      // Handle successful signup (e.g., redirect to a profile setup page)
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup errors (display error messages, etc.)
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      console.log('User logged in successfully:', userCredential.email);
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login errors (display error messages, etc.)
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
      localStorage.removeItem('userData');
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle errors appropriately (e.g., display error messages to user)
    }
  };

  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider basename='/' value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
