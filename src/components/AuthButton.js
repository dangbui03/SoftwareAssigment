// AuthButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthButton = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the onLogout function passed from App.js
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <div>
      {/* Your other navigation elements */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => navigate('/sign-in')}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
