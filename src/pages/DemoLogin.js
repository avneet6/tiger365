import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DemoLogin() {
  const navigate = useNavigate();
  const { demoLogin } = useAuth();

  const handleDemoLogin = () => {
    demoLogin();              // set demo user
    navigate("/dashboard");   // OPEN DASHBOARD PAGE
  };

  return (
    <div className="login-page">
      <img
        src="https://tiger365.pro/tiger365.pro/images/logo-text.png"
        alt="TigerExch"
      />
      <h2>Demo Login</h2>

      <button onClick={handleDemoLogin} className="btn btn-primary">
        Demo Login
      </button>
    </div>
  );
}
