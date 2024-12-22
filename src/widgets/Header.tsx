import { Link } from "react-router";

const NAV_ITEMS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Tours",
    link: "/tours",
  },
  {
    title: "Service",
    link: "/services",
  },
  {
    title: "MICE",
    link: "/mice",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Membership",
    link: "/membership",
  },
];

export function Header() {
  return (
    <div className="flex items-center justify-between px-20 py-3 ">
      <div className="flex items-center gap-5">
        <img src="./src/images/logo.png" alt="" className="w-[120px] h-[68px]" />
        <input
          placeholder="Search"
          className="h-[44px] w-[294px] text-base font-normal outline-none bg-[#E9E9E9] px-3 py-3 rounded-full"
        />
      </div>
      <nav className="flex items-center gap-6">
        <ul className="flex gap-6 text-[#101010] text-[16px] font-normal">
          {NAV_ITEMS.map((item) => (
            <Link key={item.link} to={item.link} className="cursor-pointer">
              {item.title}
            </Link>
          ))}
        </ul>
        <div className="w-[1px] h-[38px] bg-[#101010]"></div>
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" 
          className="lucide lucide-shopping-cart size-6"><circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        <div className="flex items-center gap-2 border-2 border-black rounded-full px-3 py-2">
          <div className="bg-[#E9E9E9] rounded-full size-8 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" stroke-width="2" 
              stroke-linecap="round" stroke-linejoin="round" 
              className="lucide lucide-circle-user-round size-6">
              <path d="M18 20a6 6 0 0 0-12 0"/>
              <circle cx="12" cy="10" r="4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </div>
      </nav>
      
    </div>
  );
}
