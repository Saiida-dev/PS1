import React, {useEffect, useRef, useState, useContext} from "react";
import "../styles/tour-details.css"
import {Container, Row, Col, Form, ListGroup} from "reactstrap"
import {useParams} from 'react-router-dom';
import calculateAvgRating from './../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import {AuthContext} from "./../context/AuthContext";

const TourDetails = () => {
    const {id} = useParams()
    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] = useState(null)
    const {user} = useContext(AuthContext)
    // fetch data from database
    const {data: tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)


    const {photo,
         title,
          desc, 
          price, 
          adress, 
          reviews, 
          city, 
          distance, 
          maxGroupSize,
        } = tour;

    const {totalRating, avgRating} = calculateAvgRating(reviews);
//format date
    const options = {day: "numeric", month: "long", year: "numeric"};
//submit request to the server
    const submitHandler = async e => {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value;
    
        try{




            if (!user || user===undefined || user===null){
                alert ('Please sign in')
    
            }
            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: tourRating,
            }
            const res =await fetch (`${BASE_URL}/review/${id}`, {
              method: 'POST',
              headers:{
                'content-type':'application/json'
              },
              credentials:'include',
              body: JSON.stringify(reviewObj) 
            });
            const result =await res.json()
            if(!res.ok) {
                return alert(result.message);
            }
            alert(result.message);
            


        } catch(err){
            alert(err.message);

        }

        
    };

    useEffect(()=>{
        window.scrollTo(0,0)

    },[tour]);

    return (
        <>
            <section>
                <Container>
                {
                    loading && <h4 className="text-center pt-5"> Loading ........</h4>
                }
                {
                    error && <h4 className="text-center pt-5">{error}</h4>
                }
                {
                    !loading && !error &&  <Row>
                        <Col lg='8'>
                            <div className="tour__content">
                                <img src={photo} alt="" />
                                
                                <div className="tour__info">
                                    <h2>{title}</h2>

                                    <div className="d-flex align-items-center gap-5">
                                        <span className="tour__rating d-flex align-items-center gap-1">
                                            <i class="ri-star-fill" style={{'color': "var(--secondary-color)"}}></i> 
                                            {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? "Not reted" : <span>({reviews?.length})</span>}
                                        </span>
                                        <span>
                                            <i class="ri-map-pin-user-fill"></i> {adress}
                                        </span>
                                    </div>

                                    <div className="tour__extra-details">
                                        <span><i class="ri-map-pin-2-line"></i>{city}</span>
                                        <span><i class="ri-money-dollar-circle-line"></i>{price}$ per person</span>
                                        <span><i class="ri-map-pin-time-line"></i>{distance}Km</span>
                                        <span><i class="ri-group-line"></i>{maxGroupSize} people</span>
                                    </div>

                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>

                                {/* ==== Reviews Section ==== */}
                                <div className="tour__reviews mt-4">
                                    <h4>Reviews ({reviews?.length} reviews)</h4>
                                    
                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            1<span onClick={() => setTourRating(1)}><i className="ri-star-fill"></i></span>
                                            2<span onClick={() => setTourRating(2)}><i className="ri-star-fill"></i></span>
                                            3<span onClick={() => setTourRating(3)}><i className="ri-star-fill"></i></span>
                                            4<span onClick={() => setTourRating(4)}><i className="ri-star-fill"></i></span>
                                            5<span onClick={() => setTourRating(5)}><i className="ri-star-fill"></i></span>
                                        </div>
                                        
                                        <div className="review__input">
                                            <input 
                                                type="text" 
                                                ref={reviewMsgRef} 
                                                placeholder="Share your thoughts" 
                                                required 
                                            />
                                            <button className="btn primary__btn text-white" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>

                                    <ListGroup className="user__reviews">
                                        {reviews?.map((review, index) => (
                                            <div className="review__item" key={index}>
                                                <img src={avatar} alt="user avatar" className="review__avatar" />
                                                
                                                <div className="review__content">
                                                    <div className="review__header">
                                                        <h4 className="review__username">{review.username}</h4>
                                                        <p className="review__date">
                                                            {new Date(review.createAt).toLocaleDateString("en-US", options)}
                                                        </p>
                                                    </div>
                                                    
                                                    <div className="review__rating">
                                                        <h5 className="review__title">{review.reviewText}</h5>
                                                        <span className="review__stars">
                                                            {review.rating}
                                                            <i className="ri-star-fill"></i>
                                                        </span>
                                                    </div>
                                                    
                                                    <p className="review__text"></p>
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                                {/* ==== Reviews Section End ==== */}
                            </div>
                        </Col>
                        <Col lg='4'>
                         <Booking tour={tour} avgRating={avgRating} />
                        </Col>
                    </Row>

                }
                   
                </Container>
            </section>
            <Newsletter />
            
        </>
    )
};

export default TourDetails;