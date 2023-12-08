import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulating the server-side login check
    if (email === "lam.nguyen220103@hcmut.edu.vn" && password === "admin") {
      showSuccessView();
    } else {
      showErrorView();
    }
  };

  const showSuccessView = () => {
    setShowSuccess(true);
    setShowError(false);
    navigate("/"); // If you want to navigate somewhere, uncomment this line
  };

  const showErrorView = () => {
    setShowSuccess(false);
    setShowError(true);
  };

  return (
    <div>
      {/* Conditionally render login form, success, or error views */}
      {!showSuccess && !showError && (
        <form onSubmit={handleSubmit}>
          <div className="imgcontainer">
            <img src="Images/logo.jpg" alt="Avatar" className="HeroSection" />
          </div>

          <div className="container">
            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <input
              autoFocus
              type="email"
              placeholder="Enter Email"
              name="uname"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" defaultChecked name="remember" /> Remember me
            </label>
          </div>

          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      )}

      {/* Success view */}
      {showSuccess && (
        <div className="successView">
          <h2>Login successful</h2>
          <p> 
            <Link to="/" className="nav-links">
              Go to Home
            </Link>
          </p>
        </div>
      )}

      {/* Error view */}
      {showError && (
        <div className="errorView">
          <h2>Login failed</h2>
          {/* Additional content for error view */}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
