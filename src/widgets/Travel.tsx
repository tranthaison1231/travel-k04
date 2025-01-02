import React from "react";
import Banner from "~/assets/images/banner.png";
import Crop from "~/assets/images/crop.png";
import Dalat from "~/assets/images/dalat.png";
import Danang from "~/assets/images/danang.png";
import Hue from "~/assets/images/hue.png";
import Hoian from "~/assets/images/hoian.png";
import Our from "~/assets/images/our.png";
import Support from "~/assets/images/support.svg";
import Price from "~/assets/images/price.svg";
import Quality from "~/assets/images/quality.svg";
import Flexible from "~/assets/images/flexible.svg";
import Medal from "~/assets/images/medal.svg";
import Bridge from "~/assets/images/bridge.png";
import Company from "~/assets/images/company.png";
import Star from "~/assets/images/star.svg";
import Avata from "~/assets/images/avata.png";
import Blog1 from "~/assets/images/blog1.png";
import Blog2 from "~/assets/images/blog2.png";
import Blog3 from "~/assets/images/blog3.png";
import Blog4 from "~/assets/images/blog4.png";

export function Travel() {
  return (
    <div>
      <div className="">
        <img src={Banner} alt="" className="w-full max-h-174 relative" />
        <div className="w-120 absolute bottom-0 left-32">
          <p className="text-white text-6xl font-normal mb-14">A colorful experience with us</p>
          <button className="bg-[#3562A6] flex items-center gap-2 text-white text-base font-bold px-5 py-3">
            Book now 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" 
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-arrow-right size-6">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button>
        </div>
        <div className="absolute -bottom-7 right-8">
          <button className="bg-[#09873E] flex items-center gap-2 text-white text-base font-bold px-5 py-3 rounded-full mb-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-message-square size-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Book now </button>
          <button className="bg-[#3562A6] flex items-center gap-2 text-white text-base font-bold px-5 py-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-party-popper size-6"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/>
            <path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/>
            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/>
            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/>
            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/>
            <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
            Promotional Tours </button>
        </div>
      </div>

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
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
        </div>
      </div>
      <div className="px-20 py-36">
        <p className="text-xl font-normal flex gap-2 mb-8">BEST SELLER TOURS 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
        stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plane size-6"
        ><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
        </p>
        <div className="flex justify-between mb-16">
          <p className="text-[#294D81] text-5xl font-normal max-w-174">Find your place on the coast, in the mountain or in the city.</p>
          <div className="">
            <button className="text-[#294D81] text-base font-normal flex items-center justify-center gap-2 border border-[#294D81] px-8 py-5">
            See more 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" 
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
              className="lucide lucide-arrow-right size-6">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
          
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="">
            <div className="relative mb-6">
              <img src={Dalat} alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-3">
                <p className="bg-[#09873e] text-white text-sm font-medium px-2 py-1 rounded-full">Daily tour</p>
                <p className="bg-[#f07132] text-white text-sm font-medium px-2 py-1 rounded-full">Promotion</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-2xl font-semibold mb-3">Da Lat Tour</p>
              <div className="flex gap-2 mb-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-clock size-4"
                  ><circle cx="12" cy="12" r="10"/
                  ><polyline points="12 6 12 12 16 14"/></svg>
                <p className="text-[#515151] text-base font-normal" >1 weeks</p>
              </div>
              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-route size-10"
                  ><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
                <p className="text-[#515151] text-base font-normal mb-3" >Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang</p>
              </div>
              <p className="text-[#9B9B9B] text-lg font-normal line-through ">$100</p>
              <p className="text-lg font-normal mb-6"><span className="text-[#ff4141] text-3xl font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-base font-medium ">More detail </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative mb-6">
              <img src={Danang} alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-3">
                <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full">Package tour</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-2xl font-semibold mb-3">Da Nang Tour</p>
              <div className="flex gap-2 mb-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-clock size-4"
                  ><circle cx="12" cy="12" r="10"/
                  ><polyline points="12 6 12 12 16 14"/></svg>
                <p className="text-[#515151] text-base font-normal" >1 weeks</p>
              </div>
              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-route size-10"
                  ><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
                <p className="text-[#515151] text-base font-normal mb-3" >Bà Nà Hill - Sông Hàn - Bãi Rạn - Cầu Tình Yêu - Bãi biển Sơn Trà</p>
              </div>
              <p className="text-[#9B9B9B] text-lg font-normal line-through ">$100</p>
              <p className="text-lg font-normal mb-6"><span className="text-[#203B64] text-3xl font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-base font-medium ">More detail </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative mb-6">
              <img src={Hue} alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-3">
                <p className="bg-[#09873e] text-white text-sm font-medium px-2 py-1 rounded-full">Daily tour</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-2xl font-semibold mb-3">Hue Tour</p>
              <div className="flex gap-2 mb-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-clock size-4"
                  ><circle cx="12" cy="12" r="10"/
                  ><polyline points="12 6 12 12 16 14"/></svg>
                <p className="text-[#515151] text-base font-normal" >1 weeks</p>
              </div>
              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-route size-10"
                  ><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
                <p className="text-[#515151] text-base font-normal mb-3" >Đại Nội - Lăng Tự Đức - Chùa Thiên Mụ - Đồi Vọng Cảnh - Núi Bạch Mã</p>
              </div>
              <p className="text-[#9B9B9B] text-lg font-normal line-through ">$100</p>
              <p className="text-lg font-normal mb-6"><span className="text-[#203B64] text-3xl font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-base font-medium ">More detail </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative mb-6">
              <img src={Hoian} alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-3">
                <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full">Package tour</p>
                <p className="bg-[#f07132] text-white text-sm font-medium px-2 py-1 rounded-full">Promotion</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-2xl font-semibold mb-3">Hoi An Tour</p>
              <div className="flex gap-2 mb-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-clock size-4"
                  ><circle cx="12" cy="12" r="10"/
                  ><polyline points="12 6 12 12 16 14"/></svg>
                <p className="text-[#515151] text-base font-normal" >1 weeks</p>
              </div>
              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-route size-10"
                  ><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
                <p className="text-[#515151] text-base font-normal mb-3" >Chùa Cầu - Phố cổ Hội An - Làng nghề truyền thống - Biển Cửa Đại</p>
              </div>
              <p className="text-[#9B9B9B] text-lg font-normal line-through ">$100</p>
              <p className="text-lg font-normal mb-6"><span className="text-[#ff4141] text-3xl font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-base font-medium ">More detail </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
          
        </div>
        <div className="mt-16 mb-32 flex items-center justify-between">
          <img src="src/images/arrow-right.svg" alt="" className="" />
          <img src="src/images/frame 17.svg" alt="" className="" />
          <img src="src/images/arrow-left.svg" alt="" className="" />
        </div>
      </div>   

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

      <div className="">

      </div>
        <div className="text-center mt-120">
          <div className="flex items-center justify-center gap-2 mb-6">
            <p className="text-xl font-normal ">OUR DESTINATION </p>
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" stroke-width="2" 
              stroke-linecap="round" stroke-linejoin="round" 
              className="lucide lucide-map-pin size-6">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
              <circle cx="12" cy="10" r="3"/></svg>
          </div>
          <p className="text-[#3562A6] text-5xl font-normal mb-20">The whole Vietnam in here</p>
        </div>
        <div className="flex items-center gap-16 border-b border-[#bcbcbc] ">
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">DA NANG</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">HA NOI</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">NINH BINH</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">HA LONG</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">HO CHI MINH</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">MEKONG DELTA</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">SA PA</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">NHA TRANG</p>
          <p className="text-base font-normal hover:border-b-2 border-[#3562A6]">PHU QUOC</p>
        </div>

      <div className="mt-4 relative ">
        <img src={Bridge} alt="" className="w-full"/>
        <p className="text-3xl text-white font-normal absolute top-[10%] left-[7%] w-2/3">
          <span className="font-bold">Da Nang</span> is one of the most famous vibrant coastal cities in central Vietnam that is home to stunning beaches, modern bridges, and historical landmarks.<br/><br/>
          Highlight attractions: <span className="font-bold">Bana hills, Golden Bridge, Marble Mountain, Linh Ung Pagoda, Dragon Bridge,...</span>
        </p>
      </div>

      <div className="py-36">
        <img src={Company} alt="" className="" />
      </div>

      <div className="bg-[#203B64]">
        <div className=" px-20 py-20">
          <p className="text-xl font-normal text-white mb-6">TESTIMONIAL</p>
          <p className="text-white text-5xl font-normal  mb-16">What customers talk about us</p>
          <div className="grid grid-cols-2 gap-20">
            <div className="">
              <img src={Star} alt="" className="h-8 mb-9" />
              <p className="text-white font-normal text-xl mb-8">“ Our trip to da nang was amazing and well planned. our tour guide Quang was also very friendly and the hotel rooms were comfortable. great indian food and flexible “</p>
                <div className="flex gap-4"> 
                  <img src={Avata} alt="" className="size-14 rounded-full"/>
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
                  <img src={Avata} alt="" className="size-14 rounded-full"/>
                  <div className="">
                    <p className="text-white font-semibold text-2xl">Nhat Thu</p>
                    <p className="text-white font-normal text-xl">7 month ago</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-36">
        <div className="flex items-center justify-between mb-16">
          <p className="text-[#294D81] text-5xl font-normal">From our blogs</p>
          <button className="text-[#294D81] text-base h-14 font-normal px-4 py-2 flex items-center justify-center gap-2 border border-[#294D81]">
            See more 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" 
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
              className="lucide lucide-arrow-right size-6">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="">
            <img src={Blog1} alt="" className="" />
            <p className="text-[#6e6e6e] text-sm font-normal mb-3">Oct 13, 2024</p>
            <p className="text-xl font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-sm font-normal mb-8">Where to host your team retreat, how to plan it, and what activities should you ...</p>
              <button className="text-base font-semibold flex items-center gap-2">
                Read post
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-4">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
          </div>
          <div className="">
            <img src={Blog2} alt="" className="" />
            <p className="text-[#6e6e6e] text-sm font-normal mb-3">Oct 13, 2024</p>
            <p className="text-xl font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-sm font-normal mb-8">Where to host your team retreat, how to plan it, and what activities should you ...</p>
              <button className="text-base font-semibold flex items-center gap-2">
                Read post
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-4">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
          </div>
          <div className="">
            <img src={Blog3} alt="" className="" />
            <p className="text-[#6e6e6e] text-sm font-normal mb-3">Oct 13, 2024</p>
            <p className="text-xl font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-sm font-normal mb-8">Where to host your team retreat, how to plan it, and what activities should you ...</p>
              <button className="text-base font-semibold flex items-center gap-2">
                Read post
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-4">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
          </div>
          <div className="">
            <img src={Blog4} alt="" className="" />
            <p className="text-[#6e6e6e] text-sm font-normal mb-3">Oct 13, 2024</p>
            <p className="text-xl font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-sm font-normal mb-8">Where to host your team retreat, how to plan it, and what activities should you ...</p>
              <button className="text-base font-semibold flex items-center gap-2">
                Read post
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                  className="lucide lucide-arrow-right size-4">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
