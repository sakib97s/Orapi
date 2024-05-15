import adspone from "../assets/adds1/adsone.png"
import adsptwo from "../assets/adds1/adsthree.png"
import adspthree from "../assets/adds1/bannerslider01.png"
import adspfour from "../assets/adds1/bannerslider02.png"
import Container from "./Container"
import Flex from "./Flex"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import AdsOnereusable from "./reusable/AdsOnereusable"

const AdsOne = () => {
    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,


    };

    return (
        <Container>
            <div className="lg:flex lg:justify-between py-[30px] lg:py-[50px] group">
                <div className='lg:w-[49%] mb-[30px] lg:mb-0 relative after:absolute after:top-0 after:left-0 after:content-[""]
                 group-hover:after:bg-[rgba(0,0,0,0.45)] after:w-full after:h-full'>
                    <img src={adspone} alt="" className="w-full" />
                    <div className="absolute bottom-[10%] left-[15%]">
                        <AdsOnereusable heads="Phones Sale" adspone="Up to" adsoffer="30%" adstwo="sale for all phones!" shopbtn="Shop Now" />
                    </div>
                </div>
                <div className="lg:w-[49%]">
                    <div className="pb-[33px]">
                        <Slider {...settings}>
                            <div className="relative">
                                <img src={adspthree} alt="" />
                                <div className="absolute bottom-[10%] left-[15%]">
                                    <AdsOnereusable heads="Pencil Sale" adspone="Up to" adsoffer="70%" adstwo="sale for all pencil!" shopbtn="Shop Now" />
                                </div>
                            </div>
                            <div className="relative">
                                <img src={adspfour} alt="" />
                                <div className="absolute bottom-[10%] left-[15%]">
                                    <AdsOnereusable heads="Electronics Sale" adspone="Up to" adsoffer="40%" adstwo="sale for all electronics!" shopbtn="Shop Now" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="relative">
                        <img src={adsptwo} alt="" />
                        <div className="absolute bottom-[10%] left-[15%]">
                            <AdsOnereusable heads="Furniture Offer" adspone="Up to" adsoffer="50%" adstwo="sale for all furniture items!" shopbtn="Shop Now" />
                        </div>
                    </div>
                </div>
            </div>
            <Flex className=''>
            </Flex>
        </Container >
    )
}

export default AdsOne