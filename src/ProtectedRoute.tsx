import {ReactNode} from "react";
import {Navigate, useLocation} from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
    isAuthenticated: boolean;
    isLoading: boolean;
    roleRequired?: "ADMIN" | "STUDENT" | "TEACHER";
    userRole?: string;
}

const ProtectedRoute = ({
                            children,
                            isAuthenticated,
                            isLoading,
                            roleRequired,
                            userRole,
                        }: ProtectedRouteProps) => {
    const location = useLocation();

    // Show loading state or spinner while checking authentication
    if (isLoading) {
        return <div>Loading...</div>; // Or your loading component
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                state={{from: location}}
                replace
            />
        );
    }

    if (roleRequired && userRole !== roleRequired) {
        return <Navigate to="/" replace/>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;