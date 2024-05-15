

const AdsOnereusable = ({ heads, adspone, adsoffer, adstwo, shopbtn }) => {
    return (
        <>
            <h3 className="font-dm font-bold lg:text-[38px] text-[25px] text-[#262626]">{heads}</h3>
            <div className="flex items-center lg:py-5 py-[8px]">
                <p className="font-dm font-normal text-[13px] lg:text-[16px] text-[rgba(38,38,38,0.7)] ">{adspone}</p>
                <span className="px-[5px] font-dm font-bold lg:text-[40px] text-[25px] text-[#262626]">{adsoffer}</span>
                <p className="font-dm font-normal text-[13px] lg:text-[16px] text-[rgba(38,38,38,0.7)] ">{adstwo}</p>
            </div>
            <button className="px-[30px] lg:px-[50px] py-[12px] lg:py-[16px] bg-[#262626] font-dm font-bold text-[14px] text-[#FFF]">{shopbtn}</button>
        </>
    )
}

export default AdsOnereusable