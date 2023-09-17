import React from 'react';
import { Link } from 'react-router-dom';
import log from '../../../assets/images/logo-12 1(1).png';
import { Helmet } from 'react-helmet';

// import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaCodepen, FaYoutube } from 'react-icons/fa';
import footer from '../Footer/footer.css'


const Footer = () => {
    return (
        <footer

            className="p-10 bg-[#F6D1A540]">
            <div className='footer'>
                <div className='mb-5'>
                    <div className="">
                        <span className=""><img src={log} alt="" /></span>
                        <Link to="/" className="link link-hover leading-[17.58px]">570 8th Ave, New York, NY 10018 <br />
                            United States.</Link>
                        <Link to="/" className="link link-hover font-semibold text-sm bg-[#9B6842] text-white rounded-2xl px-2 py-1">Google Map</Link>
                    </div>

                    <div className=" py-5 my-5">
                        {/* <Link to="/" className=" hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"> <FaFacebookF /> </Link>
                        <Link to="/" className="hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"><AiOutlineTwitter /> </Link>
                        <Link to="/" className="hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"><FaInstagram /> </Link>
                        <Link to="/" className="hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"><FaYoutube /> </Link> */}
                        <Helmet>
                            <link
                                rel="stylesheet"
                                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                            />
                        </Helmet>

                        <div class="wrapper ">
                            <div class="button ">
                                <div class="icon">
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <span className=''>Facebook</span>
                            </div>
                        </div>

                        {/* <div class="wrapper">
                            <div class="icon facebook">
                                <div class="tooltip">
                                    Facebook
                                </div>
                                <span><i class="fab fa-facebook-f"></i></span>
                            </div>
                            <div class="icon twitter">
                                <div class="tooltip">
                                    Twitter
                                </div>
                                <span><i class="fab fa-twitter"></i></span>
                            </div>
                            <div class="icon instagram">
                                <div class="tooltip">
                                    Instagram
                                </div>
                                <span><i class="fab fa-instagram"></i></span>
                            </div>

                            <div class="icon youtube">
                                <div class="tooltip">
                                    YouTube
                                </div>
                                <span><i class="fab fa-youtube"></i></span>
                            </div>
                        </div> */}

                        <div className="tooltip" data-tip="hello">
                            <button className="">Hover me</button>
                        </div>

                    </div>
                </div>

                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;