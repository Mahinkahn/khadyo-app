import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import Rectangl from '../../../assets/images/Rectangle 14.png';
import Group2 from '../../../assets/images/Group2.png';
import bann from '../../../assets/images/bann.png';
import Ellipse from '../../../assets/images/Ellipse 9.png';
import BG_Shape from '../../../assets/images/BG_Shape.png';
import people2 from '../../../assets/images/Image(1).png';
import people5 from '../../../assets/images/Image(2).png';
import people3 from '../../../assets/images/image-5.png';
import people1 from '../../../assets/images/Imag1.png';
import Rec from '../../../assets/images/Rec.png';
import Seed from '../../../assets/images/Seed.png';
import Vector2 from '../../../assets/images/Vector2.png';
import Review from './Review';


const Testimonial = () => {

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
    ]

    return (
        <section className='my-16 mt-20'>
            <div className=' relative mb-[-90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1400px] mx-auto ml-32'>
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
            <div className='relative' style={{
                backgroundImage: `url(${Rec})`,
                width: '1440px',
                height: '783px',
            }}>
                <div className='absolute w-[1210px] ml-24'>
                    <div className='mt-36'>
                        <img src={Seed} alt="" className='' />
                    </div>
                    <div className='flex gap-6 mr-20 justify-center mt-[-60px]'>
                        <img src={Vector2} alt="" className='mt-8' />
                        <h3 className=' text-[50px] font-serif font-bold'>Popular Products</h3>
                    </div>
                </div>
                <div className='absolute mt-20 ml-28  grid gap-x-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[1110px] mx-auto'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;