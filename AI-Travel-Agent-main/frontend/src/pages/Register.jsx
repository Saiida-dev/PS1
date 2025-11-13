import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

import registerImg from '../assets/images/register3.jpeg';
import userIcon from '../assets/images/user.png';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const { dispatch } = useContext(AuthContext);

    const handleChange = e => {
        setCredentials(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleClick = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message);
                return;
            }

            dispatch({ type: 'REGISTER_SUCCESS' });

 
            setSuccessMessage("Inscription réussie ! Vérifie ton e-mail pour activer ton compte.");

        } catch (err) {
            alert("Erreur lors de l'inscription : " + err.message);
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="Register" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="User" />
                                </div>
                                <h2>Register</h2>

                                {
                                    successMessage ? (
                                        <p className="text-success">{successMessage}</p>
                                    ) : (
                                        <Form onSubmit={handleClick}>
                                            <FormGroup>
                                                <input
                                                    type="text"
                                                    placeholder="Username"
                                                    required
                                                    id="username"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    required
                                                    id="email"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                    id="password"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                            <Button className="btn secondary_btn auth_btn" type="submit">
                                                Register
                                            </Button>
                                        </Form>
                                    )
                                }

                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;
