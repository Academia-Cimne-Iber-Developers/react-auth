import React from "react";
//import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const generateUniqueToken = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    const handleGoogleLogin = () => {
        const preAuthToken = generateUniqueToken();
        localStorage.setItem("preAuthToken", preAuthToken);
        //alert("preAuthToken: " + preAuthToken);

        const fromUrl = encodeURIComponent("http://localhost:5173/profile");
        window.location.href = `http://127.0.0.1:5000/login?state=${preAuthToken}`;
    };

    return (
        <>
            <div className="login-container container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div>
                            <div className="form-group">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn btn-primary btn-login"
                                >
                                    Iniciar sesión con Google
                                </button>
                            </div>
                            <div className="mt-3" style={{ fontSize: "15px" }}>
                                <br />
                                Si no tiene una cuenta, puedes{" "}
                                <a href={`http://127.0.0.1:5000/signup`}>
                                    crear una aquí
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
