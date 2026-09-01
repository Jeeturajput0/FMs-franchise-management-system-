import React from "react";
import { Navigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../config/roles";

export default function ProtectedRoute({ allowedRoles = [], children }) {
  const currentUser = JSON.parse(localStorage.getItem("ai_scholars_user") || "null") || {
    role: "super_admin",
  };

  if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
    const redirectPath = DASHBOARD_ROUTES[currentUser.role] || "/login";
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

