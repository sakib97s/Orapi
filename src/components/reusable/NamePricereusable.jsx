

const NamePricereusable = ({ proname, pric, black }) => {
    return (
        <div className="">
            <div className="flex justify-between items-center pt-[10px] py-2">
                <div className="">
                    <h3 className="font-dm font-bold text-[14px] lg:text-[20px] text-[#262626]">{proname}</h3>
                </div>
                <div className="">
                    <h3 className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">{pric}</h3>
                </div>
            </div>
            <div className="">
                <p className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">{black}</p>
            </div>
        </div>
    )
}

export default NamePricereusable