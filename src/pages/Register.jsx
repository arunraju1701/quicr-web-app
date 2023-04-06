import React from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import '../styles/Register.less'
import '../styles/Login.less'
import { formToJSON } from 'axios'

export default function RegisterPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
  
    const from = location.state?.from?.pathname || "/";

    function createUser(event) {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);

        auth.createUser(formToJSON(formData)).then((res) => {
            console.log("Register: createUser", res)
            navigate(from, { replace: true });
        }).catch((error) => {
            console.error("Register: createUser", error);
        })
    }

    return (
        <>
            <Header className="register-header" />
            <div className="register-page">
                <div className="container">
                    <div className="title">Registrieren</div>
                    <Form className="register-form" onSubmit={createUser}>
                        <Stack gap={3}>
                            <Form.Control className="mb-3" size="lg" type="text" placeholder="Vorname" name="firstname" required />
                            <Form.Control className="mb-3" size="lg" type="text" placeholder="Nachname" name="lastname" required />
                            <Form.Control className="mb-3" size="lg" type="email" placeholder="E-Mail-Adresse" name="email" required />
                            <Form.Control className="mb-3" size="lg" type="password" placeholder="Passwort" name="password" required />
                            <Form.Select className="mb-3 input-field" size="lg" aria-label="Geschlecht auswählen">
                                <option>Geschlecht</option>
                                <option value="male">Männlich</option>
                                <option value="female">Weiblich</option>
                            </Form.Select>
                            <Form.Control type="text" placeholder="Lizenz" name="license" required />
                            <Link to="/login">zurück</Link>
                            <Button variant="primary" type="submit"> weiter </Button>
                        </Stack>                        
                    </Form>
                </div>
            </div>
        </>
    )
}