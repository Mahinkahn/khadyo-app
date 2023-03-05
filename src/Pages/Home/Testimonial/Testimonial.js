import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import Rectangl from '../../../assets/images/Rectangle 14.png';
import bann from '../../../assets/images/bann.png';
import Ellipse from '../../../assets/images/Ellipse 9.png';
import BG_Shape from '../../../assets/images/BG_Shape.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='my-16 mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1400px] mx-auto ml-32'>
                <div className='w-[490px] h-[280px]'>
                    <img src={Rectangl} alt="" />
                </div>
                <div className=' ml-10'>
                    <img src={bann} alt="" />
                </div>
                <div className='mt-[-29px] ml-[-115px] w-[300px]'>
                    <img src={BG_Shape} alt="" />
                    <div className=' text-center mt-[-80%]'>
                        <h1 className=' text-2xl text-white  font-serif font-semibold'>Table Reservation</h1>
                        <div className="divider mt-[-5px] divide-black h-7 w-[162px] ml-16">
                            <img src={Ellipse} alt="" />
                        </div>
                        <h2 className=' font-bold text-xl text-black'>+9500-75-702-35 <br />
                            booking@khadyo.com</h2>
                        <button className='btn btn-neutral mt-6 shadow-lg shadow-neutral-500/50  w-[120px] h-[40px] font-bold capitalize'>Book Now</button>
                    </div>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;