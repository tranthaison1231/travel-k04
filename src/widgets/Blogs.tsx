import Blog5 from "~/assets/images/blog5.png";
import latest from "~/assets/images/latest.png";

export default function Blog() {
  return (
    <div>
      <div className="text-center bg-[#EBF0F8] py-28">
        <h1 className="text-5xl font-normal text-[#3562A6] mb-4">Travel Buddy Blog</h1>
        <p className="text-lg font-normal w-3/5 mx-auto">Discover the thrill of your next adventure! Gather inspiration, pack your luggage, gain valuable experiences, and update your information to transform your upcoming trips into unforgettable journeys!</p>
      </div>
      <div className="flex items-center justify-center gap-16 border-b border-[#bcbcbc] mb-13">
        <p className="text-base font-normal hover:border-b-2 border-[#3562A6] uppercase">All Post</p>
        <p className="text-base font-normal hover:border-b-2 border-[#3562A6] uppercase">Travel Updates</p>
        <p className="text-base font-normal hover:border-b-2 border-[#3562A6] uppercase">Buddy’s top reviews</p>
        <p className="text-base font-normal hover:border-b-2 border-[#3562A6] uppercase">Travel tips</p>
        <p className="text-base font-normal hover:border-b-2 border-[#3562A6] uppercase">Buddy’s News</p>
      </div>
      <div className="px-20 flex gap-6">
        <div className=" w-2/3">
          <p className="text-3xl font-normal mb-6">Latest post</p>
          <div className="relative mb-9">
            <img src={Blog5} alt="" className="" />
            <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full absolute top-7 left-7">Location</p>
          </div>
          <p className="text-sm font-normal text-[#6E6E6E] mb-3">Oct 13, 2024</p>
          <p className="text-2xl font-semibold mb-3 uppercase">10 Most Frequently Asked Questions About Team Retreats</p>
          <p className="text-lg font-normal text-[#515151] mb-8">The best coffee shops, coworking spots, gyms, yoga studios and places to live and stay in Mexico City.</p>
          <button className="text-base font-semibold flex items-center gap-2">
            Read post
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" 
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
              className="lucide lucide-arrow-right size-4" href="">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
        <div className="w-1/3">
          <p className="text-3xl font-normal mb-6">Search the blog</p>
          <input
            placeholder="Search "
            className="hidden lg:block h-11 w-full text-base font-normal outline-none border-2 px-3 py-3 rounded-full mb-8"
          />
          <p className="text-3xl font-normal mb-6">Latest posts</p>
          <div className="flex gap-3 mb-4">
            <img src={latest} alt="" className="size-32" />
            <div className="">
              <p className="text-sm font-normal text-[#6E6E6E] mb-3">Oct 13, 2024</p>
              <p className="text-lg font-medium mb-3">10 Most Frequently Asked Questions About Team</p>
              <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full w-16">Location</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <img src={latest} alt="" className="size-32" />
            <div className="">
              <p className="text-sm font-normal text-[#6E6E6E] mb-3">Oct 13, 2024</p>
              <p className="text-lg font-medium mb-3">10 Most Frequently Asked Questions About Team</p>
              <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full w-16">Location</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <img src={latest} alt="" className="size-32" />
            <div className="">
              <p className="text-sm font-normal text-[#6E6E6E] mb-3">Oct 13, 2024</p>
              <p className="text-lg font-medium mb-3">10 Most Frequently Asked Questions About Team</p>
              <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full w-16">Location</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <img src={latest} alt="" className="size-32" />
            <div className="">
              <p className="text-sm font-normal text-[#6E6E6E] mb-3">Oct 13, 2024</p>
              <p className="text-lg font-medium mb-3">10 Most Frequently Asked Questions About Team</p>
              <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full w-16">Location</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20 h-0.5 my-16 bg-black"></div>
      <div className="">
        <p className="">asdasdasd</p>
      </div>
    </div>
  );
}
