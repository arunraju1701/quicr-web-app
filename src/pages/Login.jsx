import React from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import '../styles/Login.less'

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
  
    const from = location.state?.from?.pathname || "/";

    function login(event) {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        auth.signin(email, password).then((res) => {
            console.log("Login: login", res)
            navigate(from, { replace: true });
        }).catch((error) => {
            console.error("Login: login", error);
        })
      }

    return (
        <>
            <Header className="login-header" />
            <div className="login-page">
                <div className="container">
                    <div className="title">Anmelden</div>
                    <form className="login-form" onSubmit={login}>
                        <div className="input-wrapper">
                            <input className="input-field" type="email" name="email" placeholder="Benutzername oder E-Mail-Adresse" required />
                        </div>
                        <div className="input-wrapper">
                            <input className="input-field" type="password" name="password" placeholder="Passwort" required />
                        </div>
                        <div className="login-actions">
                            <div className="login-links">
                                <div>
                                    <Link to="/register">Registrieren</Link>
                                </div>
                                <div>
                                    <Link to="/forget-password"><label className="right-label">Passwort vergessen?</label></Link>
                                </div>
                            </div>

                            <button id="login_btn" className="login-button" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}