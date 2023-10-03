import React from 'react';
import Slider from "react-slick";
import Rectangl from '../../../assets/images/Rectangle 14.png';
import Group2 from '../../../assets/images/Group2.png';
import bann from '../../../assets/images/bann.png';
import BG_Shape from '../../../assets/images/BG_Shape.png';
import people2 from '../../../assets/images/Image(1).png';
import people5 from '../../../assets/images/Image(2).png';
import people3 from '../../../assets/images/image-5.png';
import people1 from '../../../assets/images/Imag1.png';
import Rec from '../../../assets/images/Rec.png';
import Seed from '../../../assets/images/Seed.png';
import Vector2 from '../../../assets/images/Vector2.png';
import Review from './Review';
import './Testimonial.css'


const Testimonial = () => {


    const settings = {

        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };


    const reviews = [
        {
            _id: 1,
            name: 'Metallic Coffee',
            img: people1,
            imga: Group2,
            location: 'With a similar flavor to black coffee, the americano'
        },
        {
            _id: 2,
            name: 'Americano Coffee',
            img: people2,
            imga: Group2,
            location: 'With a similar flavor to black coffee, the americano'
        },
        {
            _id: 3,
            name: 'Coffee Bag',
            img: people5,
            imga: Group2,
            location: 'With a similar flavor to black coffee, the americano'
        },
        {
            _id: 3,
            name: 'Foil Food Packet',
            img: people3,
            imga: Group2,
            location: 'With a similar flavor to black coffee, the americano'
        },
        {
            _id: 1,
            name: 'Metallic Coffee',
            img: people1,
            imga: Group2,
            location: 'With a similar flavor to black coffee, the americano'
        },
        {
            _id: 2,
            name: 'Americano Coffee',
            img: people2,
            imga: Group2,
            location: 'With a similar flavor to black coffee, the americano'
        },
        {
            _id: 3,
            name: 'Foil Food Packet',
            img: people3,
            imga: Group2,
            location: 'With a similar flavor to black coffee, the americano'
        },
    ]

    return (
        <section className=' mt-52 w-full h-[783px]   px-5  mb-44 relative overflow-visible' style={{
            backgroundImage: `url(${Rec})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center ',

        }}>
            <div className=' absolute top-[-210px] md:flex block  items-center justify-center right-0 left-0 container mx-auto w-full  gap-6'>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='md:w-2/4 w-full'
                >
                    <img src={Rectangl} alt="" className='w-full h-[300px]' />
                </div>
                <div
                    data-aos="flip-down" data-aos-duration="1500"
                    className='md:w-1/4 w-full'>
                    <img src={bann} alt="" className='w-full h-[300px]' />
                </div>
                <div
                    data-aos="zoom-out-left" data-aos-duration="1500" className='  rounded-3xl  md:w-1/4 w-full h-[300px] flex items-center'
                    style={{
                        backgroundImage: `url(${BG_Shape})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                >
                    <div className='mx-auto '>
                        <div className=' text-center'>
                            <h1 className=' text-2xl text-white  font-serif font-semibold'>Table Reservation</h1>
                            <div className="divider w-2/3 mx-auto" style={{ height: "20px" }}><span className='bg-white w-[10px] h-[7px] rounded-full'></span></div>
                            <h2 className=' font-bold text-xl text-black mb-3 -mt-2'>+9500-75-702-35 <br />
                                booking@khadyo.com</h2>
                            <div className='cursor-pointer'>
                                <button className='btn bg-[#9B6842] shadow-lg   font-bold capitalize'>Book Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div
                data-aos="fade-down" data-aos-duration="1500"
                className='block mx-auto'>
                <div className='mt-44  w-full container mx-auto'>
                    <img src={Seed} alt="" className=' w-full h-[83.44px]' />
                </div>
                <div className=' container mx-auto mt-[-50px] '>
                    <div className="flex flex-row-reverse justify-center items-center">
                        <h3 className=' text-[50px] font-serif font-bold relative '>Popular Products</h3>
                        <img src={Vector2} alt="" className=' absolute  left-[37rem] top-[14.5rem] ' />

                    </div>

                </div>
            </div>

            {/* <div className='grid gap-16 overflow-visible grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 lg:w-[1210px]  container mx-auto mb-32  '> */}
            <div className=" lg:w-[1210px] mx-auto ">
                <Slider {...settings}>

                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </Slider>
            </div>
            {/* </div> */}

        </section>
    );
};

export default Testimonial;