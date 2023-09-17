import React from 'react';
import Vector4 from '../../../assets/images/Vector4.png'
import Ellipse from '../../../assets/images/Ellipse 8.png'
import bag from '../../../assets/images/bag-05 .png'
import Rectangle from '../../../assets/images/Rectangle 20.png'
import Rectangle2 from '../../../assets/images/Rectangle 21.png'
import Group33 from '../../../assets/images/Group33.png'
import Ellipse3 from '../../../assets/images/Ellipse 13.png'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import { Link } from 'react-router-dom';
const Item = () => {



    return (
        <div className=' flex mt-10 container mx-auto'

        >
            <div className='mt-24  w-2/4 relative '>
                <div className=' flex'>
                    <h1 className=' text-5xl font-serif font-bold leading-tight w-[182px] overflow-visible'>Client <br />
                        Reviews</h1>
                    <div className=' mt-8 w-full relative'>
                        <img src={Vector4} alt="" />
                    </div>
                    <div className=' absolute ml-44 mt-[-78px] overflow-visible'
                    >
                        <img src={Ellipse} alt="" />
                    </div>

                </div>
                <div className='absolute'>
                    <img src={bag} alt="" />
                </div>
                <div className=' flex mt-8 mb-2 relative overflow-visible'>
                    <Link href="" class="-mb-px font-bold w-[50px] mr-3 btn  border rounded-full bg-white capitalize   text-sm  text-[#9B6842]  hover:bg-[#9B6842]  hover:text-white  focus:bg-[#9B6842]  focus:text-white  active:bg-[#9B6842]    ">
                        01
                    </Link>
                    <Link href="" class="-mb-px font-bold w-[50px] mr-3 btn  border bg-white capitalize  rounded-full  text-sm  text-[#9B6842]  hover:bg-[#9B6842]  hover:text-white  focus:bg-[#9B6842]  focus:text-white  active:bg-[#9B6842] ">
                        02
                    </Link>
                    <Link href="" class="-mb-px font-bold w-[50px] btn  border bg-white capitalize  rounded-full  text-sm  text-[#9B6842]  hover:bg-[#9B6842] hover:text-white  focus:bg-[#9B6842]  focus:text-white  active:bg-[#9B6842] ">
                        03
                    </Link>
                    <div className=''>
                        {/* <img src={bag} alt="" /> */}
                    </div>
                </div>
            </div>
            <div className='mt-24 w-2/4  relative right-[400px] -top-28  '
            // style={{
            //     backgroundImage: `url(${Rectangle})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     width: '100vh',

            // }}
            >
                <div className=" w-full h-full bg-[#FFE4C3] rounded-xl    ">
                    <div className='' >
                        {/* <img src={Rectangle} alt="" /> */}
                        <div className=' relative mt-8 mx-[17px] pb-[62px] pt-[81px] px-[52px]   '
                            style={{
                                backgroundImage: `url(${Rectangle2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',

                            }}
                        >
                            {/* <img src={Rectangle2} alt="" className=' ' /> */}
                            <img src={Group33} alt="" className=' absolute top-[52px] right-[31px]' />
                            <div className=' text-3xl font-bold text-white relative'>
                                <h3>Khadyo would like to discuss this controversial issue with our users, as we find ourselves at the crossroads of a systemic crisis that will produce profound structural changes in our economy.</h3>
                            </div>
                        </div>
                        <div className="border">
                            <div className=' flex gap-3 justify-center items-center mt-20 mb-20  z-10  '>
                                <img src={Ellipse3} alt="" className=' w-[57px]' />
                                <img src={people1} alt="" className=' w-[57px]' />
                                <img src={people2} alt="" className=' w-[57px]' />
                                <img src={Ellipse3} alt="" className=' w-[57px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;