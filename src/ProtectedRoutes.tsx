import { Navigate, Route, RouteProps } from "react-router-dom";
import {JSX} from "react";

interface ProtectedRouteProps extends RouteProps {
    element: JSX.Element;
    isAuthenticated: boolean;
}

const ProtectedRouteProps = ({ element, isAuthenticated, ...rest }: ProtectedRouteProps) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRouteProps;
