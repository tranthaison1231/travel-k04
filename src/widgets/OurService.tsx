
import Our from "~/assets/images/our.png";
import Support from "~/assets/images/support.svg";
import Price from "~/assets/images/price.svg";
import Quality from "~/assets/images/quality.svg";
import Flexible from "~/assets/images/flexible.svg";
import Medal from "~/assets/images/medal.svg";

export function OurService() {
    return (
      <div className="flex">
        <div className="py-10 pl-20 pr-10 w-1/2 bg-[#ebf0f8]">
          <p className="text-xl font-normal flex gap-2 items-center mb-7">OUR SERVICE 
            <img src={Medal} alt="" className="size-6" /></p>
          <p className="text-[#3562A6] text-5xl font-normal mb-20">What you can expect from us</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <img src={Support} alt="" className="mb-6 size-14" />
              <p className="font-semibold text-2xl mb-4">24/7 Support</p>
              <p className="text-lg font-normal">Always ready to support whenever you need to ensure a seamless and colorful experience.</p>
            </div>
            <div className="">
              <img src={Price} alt="" className="mb-6 size-14" />
              <p className="font-semibold text-2xl mb-4">Best Price</p>
              <p className="text-lg font-normal">Whatever your style, enjoy a flawless trip with excellent accommodations at competitive prices..</p>
            </div>
            <div className="">
              <img src={Quality} alt="" className="mb-6 size-14" />
              <p className="font-semibold text-2xl mb-4">Service Quality</p>
              <p className="text-lg font-normal">Prioritize our services and stay updated with trends to enhance quality. Trust us for a satisfying trip!</p>
            </div>
            <div className="">
              <img src={Flexible} alt="" className="mb-6 size-14" />
              <p className="font-semibold text-2xl mb-4">Flexible Service</p>
              <p className="text-lg font-normal">Personalizing your trip to fit your budget and desires has never been easier!</p>
            </div>
          </div>
        </div>
        <img src={Our} alt="" className="w-1/2" />
      </div>
    );
}