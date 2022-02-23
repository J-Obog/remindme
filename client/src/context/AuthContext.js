import { React, createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        accessToken: localStorage.getItem(process.env.REACT_APP_ACCESSTK_KEY),
        refreshToken: localStorage.getItem(process.env.REACT_APP_REFRESHTK_KEY),
        authenticated: false,
    });

    useEffect(() => {
        if (!auth.accessToken || !auth.refreshToken) return;
    }, [auth, setAuth]);

    const login = (accessToken, refreshToken) => {
        localStorage.setItem(process.env.REACT_APP_ACCESSTK_KEY, accessToken);
        localStorage.setItem(process.env.REACT_APP_REFRESHTK_KEY, refreshToken);
        setAuth({ ...auth, authenticated: true, accessToken, refreshToken });
    };

    const logout = () => {
        localStorage.setItem(process.env.REACT_APP_ACCESSTK_KEY, null);
        localStorage.setItem(process.env.REACT_APP_REFRESHTK_KEY, null);
        setAuth({ authenticated: true, accessToken: null, refreshToken: null });
    };

    return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
