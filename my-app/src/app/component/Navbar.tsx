import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsCurrencyBitcoin } from 'react-icons/bs';




function Navbar() {
    return (
        <div className=' border-b border-b-gray-950 hidden sm:block '>
            <div className=" container py-4">
                <div className=" flex justify-between items-center ">
                    <div className="hidden lg:flex gap-3  ml-4 ">
                        <div className="Navbar__icons_wrapper text-2xl ">
                            <FaFacebookSquare />
                        </div>
                        <div className="Navbar__icons_wrapper text-2xl">
                            < FaLinkedin />
                        </div>
                        <div className="Navbar__icons_wrapper text-2xl">
                            <FaInstagramSquare />
                        </div>
                        <div className="Navbar__icons_wrapper text-2xl">
                            <FaSquareXTwitter />
                        </div>
                        <div className="Navbar__icons_wrapper text-2xl">
                            <FaWhatsappSquare />
                        </div>
                    </div>

                    <div className=" text-gray-950 text-[14px]">
                        <b>FREE DESIGNS //</b>THIS WEEK ORDER OVER -$200; for
                    </div>

                    <div className=" flex gap-4">
                        <select className=' text-gray-500 text-[12px] w-[70px]'
                            name="currency"

                            id="Currency"
                        >
                            <option value="USD $"> USD $</option>
                            <option value="EUR ^"> EUR ^</option>
                            <option value="INR #"> INR #</option>
                            <option value="INR #"> PKR !</option>
                            <option value="INR #"> UTD %</option>
                            <option value="INR #"> RUN &</option>
                            <option value="INR #"> LIR *</option>
                            <option value="INR #"> IRA -</option>


                        </select>
                        <select className=' text-gray-500 text-[12px] w-[80px]'
                            name=" language"
                            id=" language">

                            <option value="ENGLISH"> ENGLISH</option>
                            <option value="ENGLISH"> PAKISTANI</option>
                            <option value="ENGLISH"> INDIAN</option>
                            <option value="ENGLISH"> TURKEY</option>
                            <option value="ENGLISH"> DUBAI</option>
                            <option value="ENGLISH"> PALASTEN</option>
                            <option value="ENGLISH"> USA</option>
                            <option value="ENGLISH"> UAE</option>
                            <option value="ENGLISH"> UK</option>
                            <option value="ENGLISH"> CANADA</option>


                        </select>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar                