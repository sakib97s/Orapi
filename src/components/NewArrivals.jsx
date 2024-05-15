
import crew1 from "../assets/NewPro/Crew1.png"
import crew2 from "../assets/NewPro/Crew2.png"
import crew3 from "../assets/NewPro/Crew3.png"
import crew4 from "../assets/NewPro/Crew4.png"
import Container from "./Container"
import NewCollectreusable from "./reusable/NewCollectreusable"
import NamePricereusable from "./reusable/NamePricereusable"
import Slider from "react-slick";
import Activereusable from "./reusable/Activereusable"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='absolute bottom-[50%] left-0 translate-y-[-50%] p-[10px] bg-[#979797] rounded-full' onClick={onClick}
        ><FaArrowLeft /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='absolute bottom-[50%] right-0 translate-y-[-50%] p-[10px] bg-[#979797] rounded-full z-50' onClick={onClick}>
            <FaArrowRight />
        </div>
    );
}

const NewArrivals = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (

        <section className="pb-[30px] lg:pb-[50px] mx-[10px]">
            <Container>
                <div className="pb-[30px]">
                    <h2 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">New Arrivals</h2>
                </div>

                <Slider {...settings}>
                    <div className="w-[24%]">
                        <div className="relative overflow-hidden group mx-[15px]">
                            <img src={crew1} alt="crew1" className="w-full group-hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <div className="mx-[15px]">
                            <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className="relative overflow-hidden group mx-[15px]">
                            <img src={crew2} alt="crew2" className='w-full' />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <div className="mx-[15px]">
                            <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className="relative overflow-hidden group mx-[15px]">
                            <img src={crew3} alt="crew3" className='w-full' />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <div className="mx-[15px]">
                            <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <div className="relative overflow-hidden group mx-[15px]">
                            <img src={crew4} alt="crew4" className='w-full' />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <div className="mx-[15px]">
                            <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default NewArrivals