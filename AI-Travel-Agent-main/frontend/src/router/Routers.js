import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom' 

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import Login from './../pages/Login';
import Register from './../pages/Register';
import TourDetails from './../pages/TourDetails';
import SearcheResultList from './../pages/SearchResultList';
import Chatbot from '../pages/chatbot';
import ThankYou from '../pages/ThankYou';
import VerifyEmail from "../pages/VerifyEmail";
import About from "../pages/About";
import How from "../pages/How";




const Routers = () => {
    return (
        <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearcheResultList/>}/>
        <Route path='/chatbot' element={<Chatbot/>} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<About />} />
        <Route path="/how" element={<How />} />
       

       


        </Routes>
    )

}
export default Routers;