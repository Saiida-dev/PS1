import React from "react";
import ServiceCard  from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
    imgUrl: weatherImg,
    title: "calcule weather",
    desc: "lorem ipsum dolor sit"

    },


    {
        imgUrl: guideImg,
        title: " Best Tour Guid",
        desc: "lorem ipsum dolor sit"
    
    },


    {
            imgUrl: customizationImg,
            title: " customization",
            desc: "lorem ipsum dolor sit"
        
    },    

    
]



const ServiceList = () => {
    return (
        <>
        {
            servicesData.map((item, index)=>(
                <Col log='3' key={index}>
                <ServiceCard item={item}/>
                </Col>)

            )
             
        }
    </>
    );

};
export default ServiceList;