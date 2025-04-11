import React, { useState, useEffect } from 'react';
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const [totalAmount, setTotalAmount] = useState(0);
    const serviceFee = 10;

    // Recalculate total when guestSize or price changes
    useEffect(() => {
        const calculatedTotal = Number(price) * Number(credentials.guestSize) + Number(serviceFee);
        setTotalAmount(calculatedTotal);
    }, [credentials.guestSize, price]);

    const handleChange = e => {
        setCredentials(prev => ({ 
            ...prev, 
            [e.target.id]: e.target.value 
        }));
    };

    const handleClick = e => {
        e.preventDefault();
        console.log('Booking data:', {
            ...credentials,
            totalAmount,
            serviceFee

            
        });
        navigate("/thank-you");
    };

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price} <span>/per person</span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-s-fill"></i>
                    {avgRating === 0 ? 'Not rated' : avgRating} ({reviews?.length})
                </span>
            </div>

            {/* ========= Booking Form ========== */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form">
                    <FormGroup>
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            id="fullName" 
                            required 
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input 
                            type="number" 
                            placeholder="Phone" 
                            id="phone" 
                            required 
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input 
                            type="date" 
                            id="bookAt" 
                            required 
                            onChange={handleChange}
                        />
                        <input 
                            type="number" 
                            placeholder="Guest" 
                            id="guestSize" 
                            min="1"
                            value={credentials.guestSize}
                            required 
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </div>
            {/* ========= Booking End ========== */}

            {/* ========= Booking Bottom ========== */}
            <ListGroup className="booking__bottom">
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">
                        ${price} <i className="ri-close-line"></i> {credentials.guestSize} person
                        {credentials.guestSize > 1 ? 's' : ''}
                    </h5>
                    <span>${price * credentials.guestSize}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0">
                    <h5>Service charge</h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span>${totalAmount.toFixed(2)}</span>
                </ListGroupItem>

                <Button 
                    className="btn primary__btn w-100 mt-4" 
                    onClick={handleClick}
                >
                    Book Now
                </Button>
            </ListGroup>
        </div>
    );
};

export default Booking;