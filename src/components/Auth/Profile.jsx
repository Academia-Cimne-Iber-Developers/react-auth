import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Profile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/me", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
            credentials: "include",
        })
            .then((response) => {
                if (response.status === 401) {
                    setUser(null);
                    setIsLoading(false);
                }

                return response.json();
            })
            .then((data) => {
                if (data.user) {
                    setUser(data.user);
                }
                if (data.message) {
                    setError(data.message);
                }
                setIsLoading(false);
            })
            .catch((e) => {
                setError(e.message);
                setIsLoading(false);
            });
    }, []);

    function logout() {
        fetch("http://127.0.0.1:5000/logout", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(null);
            });
    }

    if (isLoading) return <div className="loading-message">Cargando...</div>;

    return (
        <div className="profile-container">
            <div className="profile-card">
                {user ? (
                    <div>
                        <h1 className="profile-heading">User Profile</h1>
                        <p className="profile-text">
                            Username: {user.username}
                        </p>
                        <p className="profile-text">Email: {user.email}</p>
                        <button className="profile-button" onClick={logout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <p>No se ha iniciado sesión</p>
                        <div className="profile-buttons">
                            <button
                                onClick={() =>
                                    (window.location.href = "/login")
                                }
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
