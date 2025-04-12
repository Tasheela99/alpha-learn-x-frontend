import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { LoginComponent } from "./pages/auth/Login";
import { RegisterComponent } from "./pages/auth/Register";
import { AdminDashboardComponent } from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoutes";
import { useUser } from "./context/UserContext";
import { HomePage } from "./pages/HomePage";
import "./App.css";

const App: React.FC = () => {
    const { isAuthenticated } = useUser();
    const location = useLocation();

    const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/register";

    return (
        <>
            {!hideHeaderFooter && <HeaderComponent />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <AdminDashboardComponent />
                        </ProtectedRoute>
                    }
                />
                {/* Optional: Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {!hideHeaderFooter && <FooterComponent />}
        </>
    );
};

export default App;
