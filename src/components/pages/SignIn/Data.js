  import React, { useState,useEffect } from "react";
  import "./Login.css";
  import { Link, useNavigate } from "react-router-dom";

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault();

      // Simulating the server-side login check
      if (email === "lam.nguyen220103@hcmut.edu.vn" && password === "admin") {
        console.log("Login successful");
        showSuccessView();
      } else {
        console.log("Login failed");
        showErrorView();
      }
    };

    const showSuccessView = () => {
      console.log("Setting isLoggedIn to true");
      setIsLoggedIn(true); // Set authentication state to true
      setShowSuccess(true);
      setShowError(false);
      navigate("/");
    };
    useEffect(() => {
      console.log("isLoggedIn after setting:", isLoggedIn);
    }, [isLoggedIn]); 
    const showErrorView = () => {
      console.log("showErrorView called");
      setIsLoggedIn(false); // Set authentication state to false
      setShowSuccess(false);
      setShowError(true);
    };

    const handleLogout = () => {
      console.log("handleLogout called");
      setIsLoggedIn(false); // Set authentication state to false on logout
      navigate("/"); // Navigate to the home page after logout
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
              <span className="psw">
              <a href="#">Forgot password?</a>
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

  export default Login;