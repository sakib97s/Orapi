import Container from "./Container"
import Flex from "./Flex"
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useEffect, useState } from "react";
import { useRef } from "react";
import color from "../assets/color.png"
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropRightLine } from "react-icons/ri";

const Menu = () => {
    let [cateshow, setCateShow] = useState(false)
    let [cartshow, setCartShow] = useState(false)
    let [usershow, setUserShow] = useState(false)

    let cateMenu = useRef()
    let cartMenu = useRef()
    let userMenu = useRef()

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateMenu.current.contains(e.target) == true) {
                setCateShow(!cateshow)
            } else {
                setCateShow(false)
            }
            if (cartMenu.current.contains(e.target) == true) {
                setCartShow(!cartshow)
            } else {
                setCartShow(false)
            }
            if (userMenu.current.contains(e.target) == true) {
                setUserShow(!usershow)
            } else {
                setUserShow(false)
            }
        })
    }, [cateshow, cartshow, usershow])

    let [show, setShow] = useState(false)
    let handelshow = () => {
        setShow(!show)
    }


    return (
        <section className="bg-[#F5F5F3] py-5 px-[10px]">
            <Container>
                <div className="lg:flex lg:justify-between items-center">
                    <div className=" relative" ref={cateMenu}>
                        <div className=" flex items-center gap-x-3">
                            <FaBarsStaggered />
                            <h3 className="font-dm text-[#262626] text-[16px] font-normal">Shop by Category</h3>
                        </div>
                        {cateshow &&
                            <>
                                <div className="absolute top-12 lg:top-7 left-0 bg-[#262626] w-48 lg:w-72 z-50">
                                    <ul className="">
                                        <a href="#"><li className="border-b-[1px] border-[#fff] py-2 font-dm text-[16px] text-[#fff] opacity-70 px-3 hover:opacity-100 hover:pl-6 duration-300 flex justify-between items-center">
                                            Accesories<span><RiArrowDropRightLine /></span></li></a>
                                        <a href="#"><li className="border-b-[1px] border-[#fff] py-2 font-dm text-[16px] text-[#fff] opacity-70 px-3 hover:opacity-100 hover:pl-6 duration-300 flex justify-between items-center">
                                            Furniture<span><RiArrowDropRightLine /></span></li></a>
                                        <a href="#"><li className="border-b-[1px] border-[#fff] py-2 font-dm text-[16px] text-[#fff] opacity-70 px-3 hover:opacity-100 hover:pl-6 duration-300 flex justify-between items-center">
                                            Electronics<span><RiArrowDropRightLine /></span></li></a>
                                        <a href="#"><li className="border-b-[1px] border-[#fff] py-2 font-dm text-[16px] text-[#fff] opacity-70 px-3 hover:opacity-100 hover:pl-6 duration-300 flex justify-between items-center">
                                            Clothes<span><RiArrowDropRightLine /></span></li></a>
                                        <a href="#"><li className="border-b-[1px] border-[#fff] py-2 font-dm text-[16px] text-[#fff] opacity-70 px-3 hover:opacity-100 hover:pl-6 duration-300 flex justify-between items-center">
                                            Bags<span><RiArrowDropRightLine /></span></li></a>
                                        <a href="#"><li className="py-2 font-dm text-[16px] text-[#fff] opacity-70 px-3 hover:opacity-100 hover:pl-6 duration-300 flex justify-between items-center">
                                            Home appliances<span><RiArrowDropRightLine /></span></li></a>
                                    </ul>
                                </div>
                                {/* <div className="">
                                <h3>Phones</h3>
                                <ul>
                                    <li>Phone 1</li>
                                    <li>Phone 1</li>
                                    <li>Phone 1</li>
                                    <li>Phone 1</li>
                                    <li>Phone 1</li>
                                    <li>Phone 1</li>
                                    <li>Phone 1</li>
                                </ul>
                            </div> */}

                            </>
                        }

                    </div>
                    <div className="lg:mr-20 my-4 lg:my-0">
                        <div className="relative">
                            <input type="search" className='border-2 border-[#2222] p-2 lg:w-[500px] w-full' placeholder="Search Products" />
                            <div className="absolute top-[50%] translate-y-[-50%] right-[10px]">
                                <FaSearch />
                            </div>
                        </div>
                    </div>
                    <div className=" relative">
                        <div className="flex lg:justify-end gap-x-3">
                            <div className="flex" ref={userMenu} onClick={handelshow}>
                                <a href="#" className="flex">
                                    <FaUser />
                                    {show ? <MdArrowDropDown /> : <MdArrowDropUp />}
                                </a>
                            </div>
                            <div className="" ref={cartMenu} >
                                <a href="#"><FaShoppingCart /></a>
                            </div>
                            {cartshow &&
                                <div className="absolute top-7 right-0 border-[2px] border-[#F0F0F0] w-[360px] z-50">
                                    <div className="flex items-center bg-[#F5F5F3] p-4">
                                        <img src={color} alt="color" />
                                        <div className="pl-[10px] flex items-center">
                                            <div className="font-dm text-[#262626] text-[14px] font-bold">
                                                <p className="">Black Smart Watch</p>
                                                <h6>$44.00</h6>
                                            </div>
                                            <div className="pl-16">
                                                <a href="#"><RxCross2 /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-[rgba(192,189,189,0.87)]">
                                        <h6 className="py-3 font-dm text-[16px] font-bold text-[#262626]">
                                            <span className="font-normal text-[#767676] pr-2">Subtotal :</span>
                                            $44.00</h6>
                                        <div className="font-dm text-[14px] font-bold">
                                            <button className="border-[1px] border-[#2B2B2B] py-[15px] px-10 mr-5 hover:bg-[#2B2B2B] hover:text-[#FFF]" >View Cart</button>
                                            <button className="border-[1px] border-[#2B2B2B] py-[15px] px-10 hover:bg-[#2B2B2B] hover:text-[#FFF]"> Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {usershow &&
                                <div className="bg-[#cecccc] text-center absolute top-7 right-[30px] border-[1px] w-[200px] z-50">
                                    <div className="border-b-[1px] py-4 hover:bg-[#2B2B2B] hover:text-[#FFF]">
                                        <a href="#">My Account</a>
                                    </div>
                                    <div className="py-4 hover:bg-[#2B2B2B] hover:text-[#FFF]">
                                        <a href="#">Log Out</a>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <Flex className='justify-between items-center'>

                </Flex>
            </Container>
        </section>
    )
}

export default Menu