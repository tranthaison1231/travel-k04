import Bridge from "~/assets/images/bridge.png";
import Company from "~/assets/images/company.png";
import { MenuBar } from "~/widgets/MenuBar";

export function OurDestination() {
    return (
        <div className="">
            <div className="text-center mt-120">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <p className="text-xl font-normal ">OUR DESTINATION </p>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-map-pin size-6">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" /></svg>
                </div>
                <p className="text-[#3562A6] text-5xl font-normal mb-20">The whole Vietnam in here</p>
            </div>
            <div className="flex items-center gap-16 border-b border-[#bcbcbc] justify-center">
                <MenuBar name="da nang" />
                <MenuBar name="ha noi" />
                <MenuBar name="ninh binh" />
                <MenuBar name="ha long" />
                <MenuBar name="ho chi minh" />
                <MenuBar name=" melong delta" />
                <MenuBar name="sa pa" />
                <MenuBar name="nha trang" />
                <MenuBar name="phu quoc" />
            </div>

            <div className="mt-4 relative ">
                <img src={Bridge} alt="" className="w-full" />
                <p className="text-3xl text-white font-normal absolute top-[10%] left-[7%] w-2/3">
                    <span className="font-bold">Da Nang</span> is one of the most famous vibrant coastal cities in central Vietnam that is home to stunning beaches, modern bridges, and historical landmarks.<br /><br />
                    Highlight attractions: <span className="font-bold">Bana hills, Golden Bridge, Marble Mountain, Linh Ung Pagoda, Dragon Bridge,...</span>
                </p>
            </div>

            <div className="py-36">
                <img src={Company} alt="" className="" />
            </div>
        </div>
    );
}   