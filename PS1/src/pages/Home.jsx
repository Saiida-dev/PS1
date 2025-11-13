import React from "react"; 
import '../styles/home.css'
import { Container, Row , Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';



import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';

import Subtitle from '../shared/Subtitle';
import WorldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MansonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";


const Home = () => {
    const navigate = useNavigate();

    {/* =======hero section start===========*/}
    return (
        <>
    <section>
    <Container>

        <Row>
            <Col lg='6'>
                <div className="hero__content">
                <div className="hero_subtitle d-flex align-items-center ">
                    <Subtitle subtitle={'Know Before  you Go'}/>
                    <img src={WorldImg} alt=""/>
                </div>
                <h1>Traveling opens the door to creating <span  
                className="highlight"> memories</span></h1>
                <p>
                Let AI craft your perfect adventure while you focus on making memories.
               
                </p>
            
                </div>
                <div className="mt-4">
  <button className="btn primary__btn" onClick={() => navigate('/chatbot')}>
    Ask our AI Assistant
  </button>
</div>

            </Col>


            <Col lg='2'>
            <div className="hero__img-box">
            <img src={heroImg} alt=""/>
            </div>
            </Col>


            <Col lg='2'>
            <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
            </div>
            </Col>


            <Col lg='2'>
            <div className="hero__img-box">
            <img src={heroImg02} alt=""/>
            </div>
            </Col>
            <SearchBar/>


           
        </Row>
    </Container>
    </section>
     {/* =======hero section start===========*/}
     <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title"> we offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
     </section>

     {/* =======featured tour section start===========*/}
     <section>
        <Container>
        <Row>
        <Col lg="12" className="mb-5">
                <Subtitle subtitle={"Explore"}/>
                <h2 className="featured_tour-title"> Our featured tours</h2>
            </Col>
            <FeaturedTourList/>

        </Row> 
        </Container>
     </section>
     {/* =======featured tour section end===========*/}



     {/* =======experince  section start===========*/}
     <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'}/>
                        <h2> wich our all Experience <br/> we will serve you</h2>
                        <p>Lorem ipsum sit amet , </p>
                    </div>
                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                        </div>

                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Regular Clients </h6>
                        </div>

                        <div className="counter__box">
                            <span>15</span>
                            <h6>Years Experience</h6>
                        </div>

                        
                    </div>
                </Col>
                <Col lg="6">
                    <div className="experience__img">
                        <img src={experienceImg} alt=""></img>
                    </div>
                </Col>
            </Row>
        </Container>
     </section>


      {/* =======experince  section end===========*/}




      {/* =======gallery  section start===========*/}
      <section>
        <Container>
        <Row>
        <Col lg="12" className="mb-5">
                <Subtitle subtitle={"Gallery"}/>
                <h2 className="gallery_title">  visit our customers tours gallery</h2>
        </Col>
        <Col lg="12" >
        <MansonryImagesGallery/>
        </Col>
        </Row> 
        </Container>
     </section>


      {/* =======gallery  section end===========*/}





      {/* =======testimonial  section start===========*/}
      <section>
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                <Subtitle subtitle={'Fans Love'}/>
                <h2 className="testimonial__title"> What our fans say about us </h2>

                </Col>
                <Col lg='12'>
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
      </section>


      {/* =======testimonial  section end===========*/}
      <Newsletter/>


    </>
    );

};
export default Home;