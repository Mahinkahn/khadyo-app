import React from 'react';
import Banner from '../Banner/Banner';
import GitItem from '../GitItem/GitItem';
import InfoCards from '../InfoCards/InfoCards';
import Item from '../Item/Item';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import '../Home/Home.css'

const Home = () => {


    return (
        <div className='home'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Item></Item>
            <GitItem></GitItem>
        </div>
    );
};

export default Home;