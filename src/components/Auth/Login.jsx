import React, { useEffect, useState } from "react";
import "./Login.css";

function Login() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const status = params.get("status");

        if (status === "success") {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "/profile";
        }
    }, []);

    const handleGoogleLogin = () => {
        const width = 500;
        const height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        const origin = encodeURIComponent(window.location.origin);

        window.open(
            `http://127.0.0.1:5000/login?origin=${origin}`,
            "GoogleLogin",
            `width=${width},height=${height},top=${top},left=${left}`
        );
    };

    return (
        <div className="login-container container">
            <div className="container">
                <div className="row justify-content-center">
                    <div>
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
                                <a href="#">crear una aquí</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
