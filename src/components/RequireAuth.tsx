import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; // adjust if your firebase file is in a different location

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
