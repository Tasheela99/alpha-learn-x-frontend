import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { LoginComponent } from "./pages/auth/Login";
import { RegisterComponent } from "./pages/auth/Register";
import { AdminDashboardComponent } from "./pages/admin/AdminDashboard";
import PrivateRoute from "./ProtectedRoutes";
import { useUser } from "./context/UserContext";
import {HomePage} from "./pages/HomePage.tsx";
import "./App.css"

const App: React.FC = () => {
    const { isAuthenticated, login } = useUser();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const dummyUser = { id: 1, name: "Tasheela", email: "tasheela@example.com" };
            login(dummyUser);
        }
    }, [login]);

    const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/register";

    return (
        <>
            {/*{!hideHeaderFooter && <HeaderComponent />}*/}
            <Routes>
                {/*<Route path="/login" element={<LoginComponent />} />*/}
                {/*<Route path="/register" element={<RegisterComponent />} />*/}
                {/*<Route*/}
                {/*    path="/"*/}
                {/*    element={<PrivateRoute isAuthenticated={isAuthenticated} element={<AdminDashboardComponent />} />}*/}
                {/*/>*/}
                <Route
                    path="/"
                    element={<HomePage/>}
                />
            </Routes>
            {/*{!hideHeaderFooter && <FooterComponent />}*/}
        </>
    );
};

export default App;
