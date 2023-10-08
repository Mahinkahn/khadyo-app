import React from 'react';
import { Link } from 'react-router-dom';
import log from '../../../assets/images/logo-12 1(1).png';
import { Helmet } from 'react-helmet';
import voter from '../../../assets/icons/Vector.png'
import text from '../../../assets/images/text.png'
import visa from '../../../assets/icons/visa.png'
import mastercard from '../../../assets/icons/mastercard.png'
import maestor from '../../../assets/icons/maestor.webp'
import png from '../../../assets/icons/png.png'
import paypal from '../../../assets/icons/paypal.png'
import Skrill from '../../../assets/icons/Skrill.svg.webp'
import wepay from '../../../assets/icons/wepay.png'
import money from '../../../assets/icons/money.png'
import bluepay from '../../../assets/icons/bluepay.png'
import { FaPhoneAlt, } from 'react-icons/fa';
import '../Footer/footer.css'


const Footer = () => {


    return (
        <footer

            className="p-1 bg-[#F6D1A540] overflow-hidden">
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
            </Helmet>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-0 container mx-auto px-20'>
                <div
                    data-aos="fade-up" data-aos-duration="1500"
                    className='mt-12'>
                    <Link
                        className=""><img src={log} alt="" /></Link>
                    <Link to="/" className="link link-hover leading-[17.58px] block my-5">570 8th Ave, New York, NY 10018 <br />
                        United States.</Link>

                    <Link to="/" className="link link-hover font-semibold text-sm bg-[#9B6842] text-white rounded-2xl px-2 py-1 ">Google Map</Link>


                    <div className=" my-7">
                        <div class="wrapper ">
                            <div class="button ">
                                <div class="icon">
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <span className=''>Facebook</span>
                            </div>
                            <div class="button">
                                <div class="icon">
                                    <i class="fab fa-twitter"></i>
                                </div>
                                <span>Twitter</span>
                            </div>
                            <div class="button">
                                <div class="icon">
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <span>Instagram</span>
                            </div>

                            <div class="button">
                                <div class="icon">
                                    <i class="fab fa-youtube"></i>
                                </div>
                                <span>YouTube</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div
                    data-aos="flip-left" data-aos-duration="1500"
                    className=' mt-14'>
                    <span className=" block font-bold leading-[18.75px] text-base">Delivery Support</span>
                    <div className=" flex  items-center gap-2 my-5 ">
                        <div className=" bg-[#9B6842] text-white p-2 rounded-lg"><FaPhoneAlt /></div>
                        <h3 className=' font-bold leading-[18.75px text-base'>123 - 599794069</h3>
                    </div>
                    <div className="">
                        <p>Monday - Friday : 9:00- 20:00</p>
                        <p>Saturday : 11:00- 25:00</p>
                    </div>
                    <div className="flex items-center gap-2 my-5">
                        <div className="bg-[#9B6842] p-2 rounded-lg">
                            <img src={voter} alt="" />
                        </div>
                        <p className=' font-bold leading-[18.75px text-base'>khadyo@.com</p>
                    </div>
                </div>

                <div
                    data-aos="zoom-in-down" data-aos-duration="1500"
                    className=" bg-[#9B6842]">
                    <div className=" flex justify-center items-center p-6 h-full w-full"
                        style={{
                            backgroundImage: `url(${text})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top right'
                        }}>
                        <form className=' w-[336px] -ml-5 '>
                            <h1 className=' text-white leading-[18.75px] font-bold my-5 text-base'>Subscribe Newsletter</h1>
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black ">Search</label>
                            <div class="relative ">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">

                                </div>
                                <input type="email" id="email" class="block w-full p-4 pl-10 text-sm text-black   rounded-lg bg-white focus:bg-slate-100   dark:text-black  " placeholder="Enter your email" required />
                                <button type="submit" class="text-white font-semibold bg-[#9B6842] absolute right-2.5 bottom-2.5  hover:bg-[#8E572D] focus:border-white text-sm rounded-lg  px-4 py-2 dark:bg-[#9B6842] dark:hover:bg-[#9B6842] dark:focus:bg-[#9B6842]">Sent Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div
                data-aos="flip-down" data-aos-duration="1500"
                className="grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 container mx-auto items-center w-[550px] gap-5 mt-12">
                <Link className="">
                    <img src={visa} alt="" />
                </Link>
                <Link className="">
                    <img src={mastercard} alt="" />
                </Link>
                <Link className="">
                    <img src={maestor} alt="" />
                </Link>
                <Link className="">
                    <img src={png} alt="" />
                </Link>
                <Link className="">
                    <img src={paypal} alt="" />
                </Link>
                <Link className="">
                    <img src={Skrill} alt="" />
                </Link>
                <Link className="">
                    <img src={wepay} alt="" />
                </Link>
                <Link className="">
                    <img src={money} alt="" />
                </Link>
                <Link className="">
                    <img src={bluepay} alt="" />
                </Link>
            </div>

            <div
                data-aos="fade-up" data-aos-duration="1500"
                className='text-center font-semibold text-base mt-7 mb-4'>
                <p>Copyright @ 2022 Khadyo</p>
            </div>
        </footer>
    );
};

export default Footer;