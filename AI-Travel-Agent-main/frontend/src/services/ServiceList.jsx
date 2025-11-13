import React from "react";
import ServiceCard from "./ServiceCard";
import { Row, Col } from "reactstrap";
import weatherImg from '../assets/images/weather.png';
import ai from '../assets/images/ai.png';
import customizationImg from '../assets/images/budget.png';
import searchImg from '../assets/images/booking.png';
import planImg from '../assets/images/plan.png';
import flightHotelImg from '../assets/images/vacation.png';

const servicesData = [
  {
    imgUrl: ai,
    title: "Tour Booking",
    desc: "Easily discover and book curated tours worldwide."
  },
  {
    imgUrl: customizationImg,
    title: "AI Travel Assistant",
    desc: "Personalized planning for hotels, flights, food and activities."
  },
  {
    imgUrl: customizationImg,
    title: "Smart Budget Estimator",
    desc: "Get suggestions based on your budget and trip length."
  },
  {
    imgUrl: weatherImg,
    title: "Weather Forecast",
    desc: "Stay updated with local weather for better travel planning."
  },
  {
    imgUrl: planImg,
    title: "Dynamic Daily Planner",
    desc: "Generate optimized itineraries day by day."
  },
  {
    imgUrl: flightHotelImg,
    title: "Real-Time Hotels & Flights",
    desc: "Always up-to-date suggestions based on your preferences."
  }
];

const ServiceList = () => {
  return (
    <Row className="justify-content-center">
      {servicesData.map((item, index) => (
        <Col lg='4' md='6' sm='12' className="d-flex align-items-stretch mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ServiceList;
