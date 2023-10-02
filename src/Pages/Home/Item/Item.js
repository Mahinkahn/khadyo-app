import React, { useState, useEffect } from 'react';
import Vector4 from '../../../assets/images/Vector4.png'
import Ellipse from '../../../assets/images/Ellipse 8.png'
import bag from '../../../assets/images/bag-05 .png'

import Rectangle2 from '../../../assets/images/Rectangle 21.png'
import Group33 from '../../../assets/images/Group33.png'
import Ellipse3 from '../../../assets/images/Ellipse 13.png'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import { Link } from 'react-router-dom';
const Item = () => {



    const items = [
        {
            title: "1 Khadyo would like to discuss this controversial issue with our users, as we find ourselves at the crossroads of a systemic crisis that will produce profound structural changes in our economy.",
            user: Ellipse3,
            name: "Tina Khan"
        },
        {
            title: "2 Khadyo would like to discuss this controversial issue with our users, as we find ourselves at the crossroads of a systemic crisis that will produce profound structural changes in our economy.",
            user: people1,
            name: " Herry"
        },
        {
            title: "3 Khadyo would like to discuss this controversial issue with our users, as we find ourselves at the crossroads of a systemic crisis that will produce profound structural changes in our economy.",
            user: people2,
            name: "Evana"
        }
    ]


    const [activeIndex, setActiveIndex] = useState(0);

    // Function to increment the active slide index
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Auto transition to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    },);


    return (
        <div className=' flex mt-10 container mx-auto mr-10'

        >
            <div className='mt-24 w-2/4 relative overflow-visible '>
                <div className=' flex'>
                    <h1
                        data-aos="fade-down" data-aos-duration="1500"
                        className=' text-5xl font-serif font-bold leading-tight w-[182px] overflow-visible'>Client <br />
                        Reviews</h1>
                    <div
                        data-aos="fade-left" data-aos-duration="1500"
                        className=' mt-8 w-full relative'>
                        <img src={Vector4} alt="" />
                    </div>
                    <div
                        data-aos="fade-right" data-aos-duration="1500"
                        className='absolute left-40 -top-40 '
                    >
                        <img src={Ellipse} alt="" />
                    </div>

                </div>
                <div
                    data-aos="fade-up" data-aos-duration="1500"
                    className='absolute'>
                    <img src={bag} alt="" />
                </div>
                <div
                    data-aos="fade-left" data-aos-duration="1500"
                    className=' flex mt-8 mb-2 relative overflow-visible'>
                    {items.map((item, index) => (
                        <Link onClick={() => setActiveIndex(index + 0)} href="" class={`-mb-px font-bold w-[50px] mr-3 btn  border rounded-full capitalize   text-sm  hover:bg-[#9B6842]  hover:text-white  focus:bg-[#9B6842]  focus:text-white  active:bg-[#9B6842]    ${index === activeIndex ? "bg-[#9B6842] text-white" : "bg-white text-[#9B6842]"}`}>
                            {index + 1}
                        </Link>
                    ))}

                </div>
            </div>



            <div
                data-aos="fade-left" data-aos-duration="1500"
                className=' relative right-[420px] overflow-hidden '>

                <div className="w-[760px] h-[505px] bg-[#FFE4C3] rounded-xl overflow-visible   ">

                    <div className=' ' >

                        {items.map((item, index) => (
                            <div className={`w-auto  relative mt-8 mx-[17px] pb-[62px] pt-[81px] px-[52px] transition-all duration-1000 ${index === activeIndex ? 'block w-full' : 'hidden w-0'} `}
                                style={{
                                    backgroundImage: `url(${Rectangle2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                            >
                                {/* <img src={Rectangle2} alt="" className=' ' /> */}
                                <img src={Group33} alt="" className=' absolute top-[52px] right-[31px] ' />
                                <div className=' text-3xl font-bold text-white relative overflow-hidden'>
                                    <h3 className='overflow-hidden'>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                        <div className="">
                            <div className=' flex gap-3 justify-center items-center mt-6  '>
                                {items.map((item, index) => (
                                    <div className=''>
                                        <img src={item.user} alt="" className={` w-[57px] ${index === activeIndex ? "opacity-100" : "opacity-50"}`} />
                                        <p className={`${index === activeIndex ? " opacity-100 font-semibold text-center" : " opacity-0"}`}>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item