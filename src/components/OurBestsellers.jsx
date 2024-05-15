import Container from "./Container"
import NewCollectreusable from "./reusable/NewCollectreusable"
import best1 from "../assets/Bestsell/best1.png"
import best2 from "../assets/Bestsell/best2.png"
import best3 from "../assets/Bestsell/best3.png"
import best4 from "../assets/Bestsell/best4.png"
import ads2 from "../assets/Bestsell/ads2.png"
import NamePricereusable from "./reusable/NamePricereusable"
import AdsOnereusable from "./reusable/AdsOnereusable"
import Activereusable from "./reusable/Activereusable"

const OurBestsellers = () => {
    return (
        <section className="pb-[30px] lg:pb-[50px] mx-[10px]">
            <Container>
                <div className="pb-[30px] px-[10px] lg:px-0">
                    <h2 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">Our Bestsellers</h2>
                </div>
                <div className="flex justify-between flex-wrap px-[10px] lg:px-0">
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={best1} alt="best1" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={best2} alt="best2" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={best3} alt="best3" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={best4} alt="best4" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                </div>
                <div className="lg:flex items-center bg-[#F3F3F3] mt-[50px]">
                    <img src={ads2} alt="ads2" />
                    <div className="items-center lg:text-start py-[20px]">
                        <AdsOnereusable heads='Phone of the year' adspone='Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..' adsoffer='' adstwo='' shopbtn='Shop Now' />
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default OurBestsellers