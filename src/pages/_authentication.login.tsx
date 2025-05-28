import { Navigate } from "react-router";
import Login from "../features/login/ui/Login";

export default function LoginPage() {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    return <Navigate to="/admin" />;
  }

  return <Login />;
}