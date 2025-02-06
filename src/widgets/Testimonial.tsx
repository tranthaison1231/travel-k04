import Star from "~/assets/images/star.svg";
import Avata from "~/assets/images/avata.png";

export function Testimonial() {
    return (
        <div className="bg-[#203B64]">
            <div className=" px-20 py-20">
                <p className="text-xl font-normal text-white mb-6">TESTIMONIAL</p>
                <p className="text-white text-5xl font-normal  mb-16">What customers talk about us</p>
                <div className="grid grid-cols-2 gap-20">
                    <div className="">
                        <img src={Star} alt="" className="h-8 mb-9" />
                        <p className="text-white font-normal text-xl mb-8">“ Our trip to da nang was amazing and well planned. our tour guide Quang was also very friendly and the hotel rooms were comfortable. great indian food and flexible “</p>
                        <div className="flex gap-4">
                            <img src={Avata} alt="" className="size-14 rounded-full" />
                            <div className="">
                                <p className="text-white font-semibold text-2xl">Nhat Thu</p>
                                <p className="text-white font-normal text-xl">7 month ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={Star} alt="" className="h-8 mb-9" />
                        <p className="text-white font-normal text-xl mb-8">“ Our trip to da nang was amazing and well planned. our tour guide Quang was also very friendly and the hotel rooms were comfortable. great indian food and flexible “</p>
                        <div className="flex gap-4">
                            <img src={Avata} alt="" className="size-14 rounded-full" />
                            <div className="">
                                <p className="text-white font-semibold text-2xl">Nhat Thu</p>
                                <p className="text-white font-normal text-xl">7 month ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}