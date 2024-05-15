import Container from "./Container"
import logo from "../assets/Logo.png"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <section className='mx-[10px]'>
            <Container>
                <div className="lg:flex md:flex md:justify-between lg:justify-between">
                    <div className="lg:w-[65%] md:w-full lg:flex md:flex md:justify-between lg:justify-between">
                        <div className="lg:w-[50%] md:w-[50%] flex justify-between">
                            <div className="">
                                <h3 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">MENU</h3>
                                <ul>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out">Home</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Shop</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">About</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Contact</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Journal</li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">SHOP</h3>
                                <ul>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 1</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 2</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 3</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 4</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 5</li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">HELP</h3>
                                <ul>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Privacy Policy</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Terms & Conditions</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Special E-shop</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Shipping</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Secure Payments</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:text-center lg:text-start md:text-start">
                            <h4 className="font-dm font-bold text-[16px] text-[#262626]">(052) 611-5711</h4>
                            <h4 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">company@domain.com</h4>
                            <a href="#" className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">575 Crescent Ave. Quakertown, PA 18951</a>
                        </div>
                    </div>
                    <div className="lg:w-[25%] md:w-[15%] mt-[20px]">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="flex justify-between items-center  my-[30px] sm:text-center">
                    <div className="flex gap-x-2 sm:place-content-center">
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>
                    <div className="px-[30px] lg:px-0">
                        <p className="font-dm font-normal text-[14px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer