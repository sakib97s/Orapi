import Flex from "./Flex"
import NamePricereusable from "./reusable/NamePricereusable"
import Container from "./Container"
import NewCollectreusable from "./reusable/NewCollectreusable"
import cap from '../assets/Spoffer/cap.png'
import headphone from '../assets/Spoffer/headphone.png'
import sunglass from '../assets/Spoffer/sunglass.png'
import table from '../assets/Spoffer/table.png'
import Activereusable from "./reusable/Activereusable"

const SpecialOffer = () => {
    return (
        <section className="pb-[50px] px-[10px] lg:px-0">
            <Container>
                <div className="pb-[30px]">
                    <h2 className="font-dm font-bold text-[40px] text-[#262626]">Our Bestsellers</h2>
                </div>
                <Flex className='justify-between flex-wrap'>
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={cap} alt="cap" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={headphone} alt="headphone" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={sunglass} alt="sunglass" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                        <div className="relative overflow-hidden group">
                            <img src={table} alt="table" className="w-full hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                            <NewCollectreusable newcoll='10%' />
                            <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default SpecialOffer