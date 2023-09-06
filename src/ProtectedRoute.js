import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

function ProtectedRoute({ element, redirectTo, ...rest }) {
    const { user } = useAuthContext();

    return (
        <Route
            {...rest}
            element={user ? element : <Navigate to={redirectTo} />}
        />
    );
}

export default ProtectedRoute;