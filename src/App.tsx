import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { LoginComponent } from "./pages/auth/Login";
import { RegisterComponent } from "./pages/auth/Register";
import { AdminDashboardComponent } from "./pages/admin/AdminDashboard";
import { StudentDashboardComponent } from "./pages/student/StudentDashboard";
import { TeacherDashboardComponent } from "./pages/teacher/TeacherDashboard";
import ProtectedRoute from "./ProtectedRoute";
import { useUser } from "./context/UserContext";
import { HomePage } from "./pages/HomePage";
import { Activity1 } from "./pages/teacher/activity/Activity1";
import "./App.css";

const App: React.FC = () => {
    const { isAuthenticated, isLoading, user } = useUser(); 
    const location = useLocation();

    // Show header only on homepage
    const showHeader = location.pathname === "/" || "/activity1" ;
    const showFooter = location.pathname !== "/login" && location.pathname !== "/register";

    return (
        <>
            {showHeader && <HeaderComponent />}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />

                {/* still not set to Protected Route */}
                <Route path="/activity1" element={<Activity1/>} />  

                {/* Protected Routes with Role-based Redirect */}
                <Route
                    path="/admin-dashboard"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            isLoading={isLoading}
                            roleRequired="ADMIN"
                            userRole={user?.role}
                        >
                            <AdminDashboardComponent />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/student-dashboard"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            isLoading={isLoading}
                            roleRequired="STUDENT"
                            userRole={user?.role}
                        >
                            <StudentDashboardComponent />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/teacher-dashboard"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            isLoading={isLoading}
                            roleRequired="TEACHER"
                            userRole={user?.role}
                        >
                            <TeacherDashboardComponent />
                        </ProtectedRoute>
                    }
                />

                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {showFooter && <FooterComponent />}
        </>
    );
};

export default App;