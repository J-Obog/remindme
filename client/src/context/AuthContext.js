import { React, createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const login = () => {};
    const register = () => {};
    const logout = () => {};

    return <AuthContext.Provider value={{ login, logout, register }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
