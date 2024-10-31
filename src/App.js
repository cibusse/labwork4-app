import React from "react";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Routes>
                            <Route
                                path="/"
                                element={<PrivateRoute><Dashboard /></PrivateRoute>}
                            />
                            <Route
                                path="/update-profile"
                                element={<PrivateRoute><UpdateProfile /></PrivateRoute>}
                            />
                            <Route path="/Signup" element={<Signup />} />
                            <Route path="/Login" element={<Login />} />
                            <Route path="/ForgotPassword" element={<ForgotPassword />} />
                        </Routes>
                    </div>
                </Container>
            </Router>
        </AuthProvider>
    );
}

export default App;
