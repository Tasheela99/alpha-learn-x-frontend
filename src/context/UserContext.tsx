import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import {decryptData, encryptData} from "../util/Crypto.ts";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

type UserAction =
    | { type: "LOGIN"; payload: User }
    | { type: "LOGOUT" }
    | { type: "RESTORE_SESSION"; payload: User }
    | { type: "SET_LOADING"; payload: boolean };

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,  // Start with loading state
};

const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload, isAuthenticated: true, isLoading: false };
        case "LOGOUT":
            return { ...state, user: null, isAuthenticated: false, isLoading: false };
        case "RESTORE_SESSION":
            return { ...state, user: action.payload, isAuthenticated: true, isLoading: false };
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

interface UserContextType extends UserState {
    login: (user: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Optional: Function to validate token - replace with your token validation logic
const validateToken = async (token: string): Promise<boolean> => {
    // This is a placeholder - implement actual token validation
    // For example: Make an API call to validate the token
    try {
        // Example API call
        // const response = await fetch('/api/validate-token', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`
        //     }
        // });
        // return response.ok;

        // For now, just return true if token exists
        return !!token;
    } catch (error) {
        console.error("Token validation error:", error);
        return false;
    }
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const storedUser = localStorage.getItem('user');

                if (token && storedUser) {
                    const isValid = await validateToken(token);
                    const user = decryptData(storedUser);

                    if (isValid && user) {
                        dispatch({ type: "RESTORE_SESSION", payload: user as User });
                    } else {
                        localStorage.removeItem('authToken');
                        localStorage.removeItem('user');
                        dispatch({ type: "LOGOUT" });
                    }
                } else {
                    dispatch({ type: "SET_LOADING", payload: false });
                }
            } catch (error) {
                console.error("Failed to restore session:", error);
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
                dispatch({ type: "SET_LOADING", payload: false });
            }
        };

        checkAuth();
    }, []);

    const login = (user: User) => {
        const encryptedUser = encryptData(user);
        localStorage.setItem('user', encryptedUser);
        dispatch({ type: "LOGIN", payload: user });
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        dispatch({ type: "LOGOUT" });
    };

    return (
        <UserContext.Provider value={{ ...state, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};