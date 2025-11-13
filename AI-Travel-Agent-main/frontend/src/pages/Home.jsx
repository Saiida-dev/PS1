import React from "react"; 
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import heroImage from '../assets/images/téléchargement (8).jpg';
import experienceImg from '../assets/images/experience.png';
import h from '../assets/images/day.jpeg';

import Subtitle from '../shared/Subtitle';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MansonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import About from './About';
import How from './How';

const Home = () => {
  const navigate = useNavigate();

  const redirectToAgent = () => {
    window.location.href = "http://localhost:8501/";
  };

  return (
    <>
      {/* ======= Hero Section ======= */}
      <section className="custom__hero">
        <img src={heroImage} alt="hero" className="hero__bg" />
        <div className="overlay" />
        <div className="hero__fade" />
        <div className="hero__text text-center">
          <h1>Explore the world with us</h1>
          <p>Smarter trips start here</p>
          <button className="btn primary__btn mt-3" onClick={redirectToAgent}>
            Ask our AI Agent
          </button>
        </div>
      </section>

      {/* ======= About Section ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <About />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Services Section ======= */}
      {/* ===== Services Section ===== */}
<section className="services-section">
  <Container>
    <Row>
      <Col lg="3">
        <h5 className="services__subtitle">What we serve</h5>
        <h2 className="services__title">We offer our best services</h2>
      </Col>
      <ServiceList />
    </Row>
  </Container>
</section>


      {/* ======= How It Works Section ======= */}
      <section>
        <Container>
          <Row>
            <How />
          </Row>
        </Container>
      </section>

      {/* ======= Featured Tours Section ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle="OR" />
              <h2 className="featured_tour-title">Choose one of our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ======= Search Section ======= */}
    <section>
  <Container>
    <Row className="align-items-center">
      <Col lg="3" md="4">
        <h5 className="services__subtitle mb-1">For More Tours</h5>
        <h2 className="services__title mb-0">Choose a destination</h2>
      </Col>

      <Col lg="9" md="8">
        <SearchBar />
      </Col>
    </Row>
  </Container>
</section>



      {/* ======= Experience Section ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle="Experience" />
                <h2>With all our experience <br /> we will serve you</h2>
                <p>Lorem ipsum sit amet.</p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <Col lg="6">
  <div className="experience__img">
    <img src={h} alt="Experience day" className="experience__photo" />
  </div>
</Col>

                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Gallery Section ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle="Gallery" />
              <h2 className="gallery_title">Visit our customers' tour gallery</h2>
            </Col>
            <Col lg="12">
              <MansonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Testimonial Section ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle="Fans Love" />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Newsletter ======= */}
      <Newsletter />
    </>
  );
};

export default Home;
