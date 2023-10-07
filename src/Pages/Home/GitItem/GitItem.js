import React from 'react';
import Slider from "react-slick";
import image2 from '../../../assets/images/image 22.png'
import image3 from '../../../assets/images/image 33.png'
import image4 from '../../../assets/images/image 44.png'
import image5 from '../../../assets/images/image 55.png'
import image6 from '../../../assets/images/image 66.png'
import image7 from '../../../assets/images/image 77.png'
const GitItem = () => {

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear"

    };

    return (

        <div
            data-aos='fade-zoom-in'
            data-aos-delay='50'
            data-aos-duration='1000'
            className='container mx-auto  items-center mt-20 mb-20 '>

            <Slider {...settings}>

                <div>
                    <img src={image5} alt="" />
                </div>

                <div>
                    <img src={image6} alt="" />
                </div>

                <div>
                    <img src={image7} alt="" />
                </div>

                <div>
                    <img src={image6} alt="" />
                </div>

                <div>
                    <img src={image7} alt="" />
                </div>

                <div>
                    <img src={image2} alt="" className=' mt-4' />
                </div>

                <div>
                    <img src={image3} alt="" className=' mt-4' />
                </div>

                <div>
                    <img src={image4} alt="" className=' mt-4' />
                </div>

            </Slider>




        </div>


    );
};

export default GitItem;