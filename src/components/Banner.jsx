
import Slider from "react-slick";
import banner from "../assets/banner.png"
import Container from "./Container";
import Flex from "./Flex";
import { FaTruck } from "react-icons/fa";
import { SlReload } from "react-icons/sl";
import AdsOnereusable from "./reusable/AdsOnereusable";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: "absolute",
                    left: "60px",
                    top: "50%",
                    transform: "translateY(-50%)"

                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    padding: "10px 0",
                    width: "30px",
                    fontWeight: "600",
                    color: "transparent",
                    borderRight: "3px #FFF solid"
                }}
            >
                0{i + 1}
            </div>
        )
    };
    return (
        <section className="border-b-[2px] border-b-[#F0F0F0]">
            <Slider {...settings}>
                <div className="relative">
                    <img src={banner} alt="banner" />
                    <div className="absolute top-[50%] left-80 translate-y-[-50%]">
                        <AdsOnereusable heads="Final Offer" adspone="Up to" adsoffer="50%" adstwo="sale for all phones!" shopbtn="Shop Now" />
                    </div>
                </div>
                <div className="relative">
                    <img src={banner} alt="banner" />
                    <div className="absolute top-[50%] left-80 translate-y-[-50%]">
                        <AdsOnereusable heads="Final Offer" adspone="Up to" adsoffer="60%" adstwo="sale for all phones!" shopbtn="Shop Now" />
                    </div>
                </div>
                <div className="relative">
                    <img src={banner} alt="banner" />
                    <div className="absolute top-[50%] left-80 translate-y-[-50%]">
                        <AdsOnereusable heads="Final Offer" adspone="Up to" adsoffer="70%" adstwo="sale for all phones!" shopbtn="Shop Now" />
                    </div>
                </div>
                <div className="relative">
                    <img src={banner} alt="banner" />
                    <div className="absolute top-[50%] left-80 translate-y-[-50%]">
                        <AdsOnereusable heads="Final Offer" adspone="Up to" adsoffer="80%" adstwo="sale for all phones!" shopbtn="Shop Now" />
                    </div>
                </div>
            </Slider>
            <Container>
                <Flex className='items-center justify-between py-[10px] px-[10px] lg:px-0'>
                    <div className="flex items-center">
                        <span className="font-dm font-bold text-[#262626] text-[25px]">2</span>
                        <h6 className="font-dm font-normal text-[12px] lg:text-[16px] pl-[10px] text-[#6D6D6D]">Two years warranty</h6>
                    </div>
                    <div className="flex items-center">
                        <FaTruck className="h-[25px] w-[30px]" />
                        <h6 className="font-dm font-normal text-[12px] lg:text-[16px] pl-[10px] text-[#6D6D6D]">Free shipping</h6>
                    </div>
                    <div className="flex items-center">
                        <SlReload className="h-[25px] w-[30px]" />
                        <h6 className="font-dm font-normal text-[12px] lg:text-[16px] pl-[10px] text-[#6D6D6D]">Return policy in 30 days</h6>
                    </div>
                </Flex>
            </Container>

        </section>
    )
}

export default Banner