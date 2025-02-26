import Crop from "~/assets/images/crop.png";

export function About() {
    return (
        <div className=" grid grid-cols-2 ">
            <img src={Crop} alt="" className="h-full" />
            <div className="pl-12 w-full bg-[#ebf0f8]">
                <p className="text-[#3562A6] text-5xl font-normal mt-20 mb-8">About Travel Buddy</p>
                <p className=" text-base font-normal mb-6 max-w-100">Travel Buddy is a young and dynamic DMC in Vietnam founded in September 2023, primarily operating in international and domestic travel and tourism services.<br></br><br></br>We possess a young, sensitive workforce with current trends and high expertise, so we are poised to offer more engaging and fulfilling travel experiences than ever. </p>
                <div className="flex items-center justify-between w-120">
                    <div className="">
                        <p className="text-[#203B64] text-4xl font-normal mb-1.5">25+</p>
                        <p className="text-base font-normal">Destinations</p>
                    </div>
                    <div className="">
                        <p className="text-[#203B64] text-4xl font-normal mb-1.5">2500+</p>
                        <p className="text-base font-normal">Tourists per year</p>
                    </div>
                    <div className="">
                        <p className="text-[#203B64] text-4xl font-normal mb-1.5">120+</p>
                        <p className="text-base font-normal">Partners</p>
                    </div>
                </div>
                <button className="bg-[#3562A6] mt-6 flex items-center gap-2 text-white text-base font-bold px-5 py-3">Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-arrow-right size-6">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
}