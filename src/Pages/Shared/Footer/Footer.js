import React from 'react';
import { Link } from 'react-router-dom';
import log from '../../../assets/images/logo-12 1(1).png';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer

            className="p-10 bg-[#F6D1A540]">
            <div className='footer'>
                <div>
                    <span className=""><img src={log} alt="" /></span>
                    <Link to="/" className="link link-hover leading-[17.58px]">570 8th Ave, New York, NY 10018 <br />
                        United States.</Link>
                    <Link to="/" className="link link-hover font-semibold text-sm bg-[#9B6842] text-white rounded-2xl px-2 py-1">Google Map</Link>
                    <div className=" flex justify-center items-center">
                        <Link to="/" className=" hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"> <FaFacebookF /> </Link>
                        <Link to="/" className="hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"><AiOutlineTwitter /> </Link>
                        <Link to="/" className="hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"><FaInstagram /> </Link>
                        <Link to="/" className="hover:bg-[#9B6842] hover:text-white px-2 py-2 rounded-md"><FaYoutube /> </Link>
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