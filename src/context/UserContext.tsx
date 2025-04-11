import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
}

type UserAction =
    | { type: "LOGIN"; payload: User }
    | { type: "LOGOUT" };

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};

const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "LOGOUT":
            return { ...state, user: null, isAuthenticated: false };
        default:
            return state;
    }
};

interface UserContextType extends UserState {
    login: (user: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const login = (user: User) => {
        dispatch({ type: "LOGIN", payload: user });
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <UserContext.Provider value={{ ...state, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
