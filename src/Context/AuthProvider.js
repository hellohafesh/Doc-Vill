import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config.js';
export const AuthContext = createContext();



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, carentUser => {
            setUser(carentUser);
            setLoading(false);
        });
        return () => unsbscribe();
    }, []);
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }
    const authInfo = {
        createUser,
        loginEmailPassword,
        updateUser,
        loading,
        logOut,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;