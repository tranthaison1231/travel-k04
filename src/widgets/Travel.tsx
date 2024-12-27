import React from "react";
import Banner from "~/assets/images/banner.png";
import Crop from "~/assets/images/crop.png";

export function Travel() {
  return (
    <div>
      <div className="">
        <img src={Banner} alt="" className="w-full h-174 relative" />
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
        <div className="absolute -bottom-20 right-10">
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

      {/* <div className=" grid grid-cols-2 ">
        <img src={Crop} alt="" className="" />
        <div className="pl-12 w-full bg-[#ebf0f8]">
          <p className="text-[#3562A6] text-[48px] font-normal mb-6">About Travel Buddy</p>
          <p className=" text-[16px] font-normal mb-6 w-[470px]">Travel Buddy is a young and dynamic DMC in Vietnam founded in September 2023, primarily operating in international and domestic travel and tourism services.<br></br><br></br>We possess a young, sensitive workforce with current trends and high expertise, so we are poised to offer more engaging and fulfilling travel experiences than ever. </p>
          <div className="flex items-center justify-between w-[470px]">
            <div className="">
              <p className="text-[#203B64] text-[40px] font-normal mb-[6px]">25+</p>
              <p className="text-[16px] font-normal">Destinations</p>
            </div>
            <div className="">
              <p className="text-[#203B64] text-[40px] font-normal mb-[6px]">2500+</p>
              <p className="text-[16px] font-normal">Tourists per year</p>
            </div>
            <div className="">
              <p className="text-[#203B64] text-[40px] font-normal mb-[6px]">120+</p>
              <p className="text-[16px] font-normal">Partners</p>
            </div>
          </div>
          <div className="bg-[#3562A6] w-[160px] mt-6">
            <button className="flex items-center gap-2 text-white text-[16px] font-bold px-5 py-3">Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="24" 
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                className="lucide lucide-arrow-right size-6">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
          </div>
        </div>
      </div>
      <div className="px-20 py-[140px]">
        <p className="text-[20px] font-normal flex gap-2 mb-[30px]">BEST SELLER TOURS <img src="./src/images/airplaneTilt.svg" alt="" className="" /></p>
        <div className="flex justify-between mb-[64px]">
          <p className="text-[#294D81] text-[48px] font-normal max-w-[700px]">Find your place on the coast, in the mountain or in the city.</p>
          <button className="text-[#294D81] text-[16px] h-[56px] font-normal px-2 py-2 flex items-center justify-center gap-2 border border-[#294D81]">See more <img src="./src/images/vector.svg" alt="" className="" /></button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="">
            <div className="relative mb-6">
              <img src="./src/images/image.png" alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-8">
                <p className="bg-[#09873e] text-white text-[14px] font-medium px-2 py-1 rounded-full">Daily tour</p>
                <p className="bg-[#f07132] text-white text-[14px] font-medium px-2 py-1 rounded-full">Promotion</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-[24px] font-semibold mb-3">Da Lat Tour</p>
              <div className="flex items-center gap-2">
                <img src="./src/images/clock.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >1 weeks</p>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <img src="./src/images/path.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang</p>
              </div>
              <p className="text-[#9B9B9B] text-[18px] font-normal line-through mb-3">$100</p>
              <p className="text-[18px] font-normal mb-6"><span className="text-[#ff4141] text-[32px] font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative mb-6">
              <img src="./src/images/image.png" alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-8">
                <p className="bg-[#09873e] text-white text-[14px] font-medium px-2 py-1 rounded-full">Daily tour</p>
                <p className="bg-[#f07132] text-white text-[14px] font-medium px-2 py-1 rounded-full">Promotion</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-[24px] font-semibold mb-3">Da Lat Tour</p>
              <div className="flex items-center gap-2">
                <img src="./src/images/clock.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >1 weeks</p>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <img src="./src/images/path.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang</p>
              </div>
              <p className="text-[#9B9B9B] text-[18px] font-normal line-through mb-3">$100</p>
              <p className="text-[18px] font-normal mb-6"><span className="text-[#ff4141] text-[32px] font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative mb-6">
              <img src="./src/images/image.png" alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-8">
                <p className="bg-[#09873e] text-white text-[14px] font-medium px-2 py-1 rounded-full">Daily tour</p>
                <p className="bg-[#f07132] text-white text-[14px] font-medium px-2 py-1 rounded-full">Promotion</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-[24px] font-semibold mb-3">Da Lat Tour</p>
              <div className="flex items-center gap-2">
                <img src="./src/images/clock.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >1 weeks</p>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <img src="./src/images/path.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang</p>
              </div>
              <p className="text-[#9B9B9B] text-[18px] font-normal line-through mb-3">$100</p>
              <p className="text-[18px] font-normal mb-6"><span className="text-[#ff4141] text-[32px] font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative mb-6">
              <img src="./src/images/image.png" alt="" className="" />
              <div className="flex gap-2 absolute top-3 right-8">
                <p className="bg-[#09873e] text-white text-[14px] font-medium px-2 py-1 rounded-full">Daily tour</p>
                <p className="bg-[#f07132] text-white text-[14px] font-medium px-2 py-1 rounded-full">Promotion</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#182D4C] text-[24px] font-semibold mb-3">Da Lat Tour</p>
              <div className="flex items-center gap-2">
                <img src="./src/images/clock.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >1 weeks</p>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <img src="./src/images/path.svg" alt="" className="" />
                <p className="text-[#515151] text-[16px] font-normal mb-3" >Thác Datanla - Thung Lũng Tình Yêu - Cao Nguyên Hoa - Núi Langbiang</p>
              </div>
              <p className="text-[#9B9B9B] text-[18px] font-normal line-through mb-3">$100</p>
              <p className="text-[18px] font-normal mb-6"><span className="text-[#ff4141] text-[32px] font-bold">$40</span>/pax</p>
              <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[64px] mb-[120px] flex items-center justify-between">
          <img src="src/images/arrow-right.svg" alt="" className="" />
          <img src="src/images/frame 17.svg" alt="" className="" />
          <img src="src/images/arrow-left.svg" alt="" className="" />
        </div>
      </div>   

      <div className=" grid grid-cols-2 gap-0">
        <div className="pl-12 max-w-[470px] bg-[#ebf0f8]">
          <p className="text-[20px] font-normal flex gap-2 items-center mb-[30px] mt-[85px]">OUR SERVICE <img src="./src/images/medal.svg" alt="" className="size-6" /></p>
          <p className="text-[#3562A6] text-[48px] font-normal mb-20">What you can expect from us</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <img src="src/images/image 5.svg" alt="" className="mb-6 size-[55px]" />
              <p className="font-semibold text-[24px] mb-4">24/7 Support</p>
              <p className="text-[18px] font-normal">Always ready to support whenever you need to ensure a seamless and colorful experience.</p>
            </div>
            <div className="">
              <img src="src/images/image 18.svg" alt="" className="mb-6 size-[55px]" />
              <p className="font-semibold text-[24px] mb-4">Best Price</p>
              <p className="text-[18px] font-normal">Whatever your style, enjoy a flawless trip with excellent accommodations at competitive prices..</p>
            </div>
            <div className="">
              <img src="src/images/image 20.svg" alt="" className="mb-6 size-[55px]" />
              <p className="font-semibold text-[24px] mb-4">Service Quality</p>
              <p className="text-[18px] font-normal">Prioritize our services and stay updated with trends to enhance quality. Trust us for a satisfying trip!</p>
            </div>
            <div className="">
              <img src="src/images/image 19.svg" alt="" className="mb-6 size-[55px]" />
              <p className="font-semibold text-[24px] mb-4">Flexible Service</p>
              <p className="text-[18px] font-normal">Personalizing your trip to fit your budget and desires has never been easier!</p>
            </div>
          </div>
        </div>
        <img src="src/images/Rectangle 15.png" alt="" className="" />
      </div>

      <div className="">

      </div>
        <div className="text-center mt-[140px]">
          <div className="flex items-center justify-center gap-2">
            <p className="text-[20px] font-normal mb-6">OUR DESTINATION </p>
            <img src="./src/images/mapPin.svg" alt="" className="size-6" />
          </div>
          <p className="text-[#3562A6] text-[48px] font-normal mb-20">The whole Vietnam in here</p>
        </div>
        <div className="flex items-center justify-center gap-16 border-b border-[#bcbcbc]">
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">DA NANG</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">HA NOI</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">NINH BINH</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">HA LONG</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">HO CHI MINH</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">MEKONG DELTA</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">SA PA</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">NHA TRANG</p>
          <p className="text-[16px] font-normal hover:border-b-2 border-[#3562A6]">PHU QUOC</p>
        </div>

      <div className="mt-4 relative ">
        <img src="src/images/image (4).png" alt="" className="w-full"/>
        <p className="text-[32px] text-white font-normal absolute top-[10%] left-[7%] max-w-[840px]">
          <span className="font-bold">Da Nang</span> is one of the most famous vibrant coastal cities in central Vietnam that is home to stunning beaches, modern bridges, and historical landmarks.<br/><br/>
          Highlight attractions: <span className="font-bold">Bana hills, Golden Bridge, Marble Mountain, Linh Ung Pagoda, Dragon Bridge,...</span>
        </p>
      </div>

      <div className="py-[140px]">
        <img src="src/images/logohang.png" alt="" className="h-[108px] mb-[52px]" />
        <img src="src/images/logohang1.png" alt="" className="h-[108px]" />
      </div>

      <div className="bg-[#203B64]">
        <div className=" px-20 py-20">
          <p className="text-[20px] font-normal text-white mb-6">TESTIMONIAL</p>
          <p className="text-white text-[48px] font-normal  mb-[64px]">What customers talk about us</p>
          <div className="grid grid-cols-2 gap-[80px]">
            <div className="">
              <img src="src/images/sao.svg" alt="" className="h-[32px] mb-[35px]" />
              <p className="text-white font-normal text-[20px] mb-[32px]">“ Our trip to da nang was amazing and well planned. our tour guide Quang was also very friendly and the hotel rooms were comfortable. great indian food and flexible “</p>
                <div className="flex gap-4"> 
                  <img src="src/images/avata.png" alt="" className="size-[60px] rounded-full"/>
                  <div className="">
                    <p className="text-white font-semibold text-[24px]">Nhat Thu</p>
                    <p className="text-white font-normal text-[20px]">7 month ago</p>
                  </div>
                </div>
            </div>
            <div className="">
              <img src="src/images/sao.svg" alt="" className="h-[32px] mb-[35px]" />
              <p className="text-white font-normal text-[20px] mb-[32px]">“ Our trip to da nang was amazing and well planned. our tour guide Quang was also very friendly and the hotel rooms were comfortable. great indian food and flexible “</p>
                <div className="flex gap-4"> 
                  <img src="src/images/avata.png" alt="" className="size-[60px] rounded-full"/>
                  <div className="">
                    <p className="text-white font-semibold text-[24px]">Nhat Thu</p>
                    <p className="text-white font-normal text-[20px]">7 month ago</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 py-[150px]">
        <div className="flex items-center justify-between mb-[64px]">
          <p className="text-[#294D81] text-[48px] font-normal max-w-[700px]">From our blogs</p>
          <button className="text-[#294D81] text-[16px] h-[56px] font-normal px-4 py-2 flex items-center justify-center gap-2 border border-[#294D81]">See more <img src="./src/images/vector.svg" alt="" className="" /></button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="">
            <img src="src/images/rectangle12.png" alt="" className="" />
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-3">Oct 13, 2024</p>
            <p className="text-[20px] font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-[32px]">Where to host your team retreat, how to plan it, and what activities should you ...</p>
            <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
          </div>
          <div className="">
            <img src="src/images/rectangle12.png" alt="" className="" />
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-3">Oct 13, 2024</p>
            <p className="text-[20px] font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-[32px]">Where to host your team retreat, how to plan it, and what activities should you ...</p>
            <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
          </div>
          <div className="">
            <img src="src/images/rectangle12.png" alt="" className="" />
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-3">Oct 13, 2024</p>
            <p className="text-[20px] font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-[32px]">Where to host your team retreat, how to plan it, and what activities should you ...</p>
            <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
          </div>
          <div className="">
            <img src="src/images/rectangle12.png" alt="" className="" />
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-3">Oct 13, 2024</p>
            <p className="text-[20px] font-semibold mb-3">10 Most Frequently Asked Questions About Team Retreats</p>
            <p className="text-[#6e6e6e] text-[14px] font-normal mb-[32px]">Where to host your team retreat, how to plan it, and what activities should you ...</p>
            <div className="flex gap-3">
                <p className="text-[16px] font-medium ">More detail </p>
                <img src="./src/images/arrowRight1.svg" alt="" className="" />
              </div>
          </div>
        </div>
      </div>

      <div className="">
        <video 
          tabIndex={-1} 
          className="video-stream html5-main-video" 
          webkit-playsinline="true"
          playsInline
          controlsList="nodownload" 
          style={{ width: '679px', height: '382px', left: '0px', top: '0px' }}
          src="https://www.youtube.com/watch?v=dlTwXSJZuto"
        />
      </div> */}
    </div>
  );
}
