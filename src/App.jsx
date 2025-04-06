import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import _MainDashboard from "./components/_MainDashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Login } from "./components/auth/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Component {...rest} /> : <Navigate to='/login' />
};


function App() {
  return (
    <AuthProvider>
          <Router>
              <Routes>
                  <Route path="/login" element={<Login />} /> { /* Use element instead of components*/}
                  <Route path="/dashboard" element={<PrivateRoute component={ _MainDashboard }/>} />
                  <Route path="/" element={<Navigate to="/login" />} />  {/* Replace Redirect with Navigate */}
              </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
