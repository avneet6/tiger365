import React, { useState } from "react";
import Cookies from "js-cookie";

export default function LoginModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Cookies.set("username", username);
    Cookies.set("password", password);
  };

  const demoLogin = () => {
    setUsername("demo123");
    setPassword("123456");
  };

  return (
    <div className="modal fade" id="LoginHome" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body text-center">
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>

            <img
              src="https://tiger365.pro/tiger365.pro/images/logo-text.png"
              alt="logo"
              className="img-fluid mb-3"
            />

            <h2>Login</h2>

            <input
              className="form-control mb-2"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-primary w-100 mb-2" onClick={handleSubmit}>
              Login
            </button>

            <button className="btn btn-secondary w-100" onClick={demoLogin}>
              Demo Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
