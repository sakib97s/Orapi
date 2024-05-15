import { FaHeart, FaCartPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Activereusable = ({ WishList, Compare, cart }) => {
    return (
        <div className="lg:bg-[#F5F5F5] bg-[#f5f5f5a8] lg:h-[150px] h-[80px] absolute bottom-[-150px] left-0 w-full opacity-0
                        flex justify-end items-center group-hover:bottom-0
                        lg:group-hover:h-[150px] group-hover:h-[90px] group-hover:opacity-100 duration-500 ease-in-out">
            <div className="">
                <div className="flex items-center justify-end gap-x-1 lg:gap-x-3 py-[5px] lg:py-2 mr-1 lg:mr-2">
                    <p className="font-dm font-normal text-[12px] lg:text-[16px]  text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out">{WishList}</p>
                    <FaHeart />
                </div>
                <div className="flex items-center justify-end gap-x-1 lg:gap-x-3 py-[5px] lg:py-2 mr-1 lg:mr-2">
                    <p className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out">{Compare}</p>
                    <FaCartPlus />
                </div>
                <div className="flex items-center justify-end gap-x-1 lg:gap-x-3 py-[5px] lg:py-2 mr-1 lg:mr-2">
                    <p className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out">{cart}</p>
                    <TfiReload />
                </div>
            </div>
        </div>
    )
}

export default Activereusable