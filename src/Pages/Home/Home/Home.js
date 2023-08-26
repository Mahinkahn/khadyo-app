import React, { useEffect } from 'react';
import Aos from 'aos';
import Banner from '../Banner/Banner';
import GitItem from '../GitItem/GitItem';
import InfoCards from '../InfoCards/InfoCards';
import Item from '../Item/Item';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import homeCss from '../Home/Home.css'

const Home = () => {

    useEffect(() => {
        Aos.init();
    }, []);

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