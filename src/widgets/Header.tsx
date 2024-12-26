import { Link } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import Logo from "~/assets/images/logo.svg";


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
  const [isUserOpen, setIsUserOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  const toggleUserMenu = () => {
    setIsUserOpen(!isUserOpen);
  };

  const handleClickUser = (event: MouseEvent) => {
    if (userRef.current && !userRef.current.contains(event.target as Node)) {
      setIsUserOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", handleClickUser as EventListener);
    return () => {
      document.removeEventListener("click", handleClickUser as EventListener);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#182d4c] lg:py-3 lg:px-20 px-5 py-3">
          <div className="flex justify-between">
            <div className="hidden lg:block">
              <div className=" flex items-center gap-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white size-[15px] lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <p className="text-white text-[14px] font-normal">info@travelbuddyvn.com</p>
                <div className="w-[1px] h-[18px] bg-white"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white size-[15px] lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <p className="text-white text-[14px] font-normal">(+84) 123 456 789</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-[15px] text-white lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  <p className="text-white text-sm font-normal hidden lg:block">Facebook</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-[15px] lucide lucide-instagram text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <p className="text-white text-sm font-normal hidden lg:block">Instagram</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-[15px] text-white lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
                  <p className="text-white text-sm font-normal hidden lg:block">Google Map</p>
                </div>  
                <div className="w-[1px] h-[12px] bg-white hidden lg:block mr-4"></div>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-[15px] text-white lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <p className="text-white text-sm font-normal">English/USD</p>
              </div>
            </div>
          </div>
        </div>

      <div className="flex items-center justify-between lg:px-20 lg:py-3 px-[20px] py-2 ">
        <div className="flex items-center gap-5">
          <img src={Logo} alt="" className="w-[120px] h-[68px]" />
          <input
            placeholder="Search "
            className="hidden lg:block h-11 w-72 text-base font-normal outline-none bg-[#E9E9E9] px-3 py-3 rounded-full"
          />
        </div>
        <nav className="flex items-center gap-6">
          <div className="hidden lg:block">
            <ul className="flex gap-6 text-[#101010] text-base font-normal ">
              {NAV_ITEMS.map((item) => (
                <Link key={item.link} to={item.link} className="cursor-pointer">
                  {item.title}
                </Link>
              ))}
            </ul>            
          </div>
          <div className="w-0.5 max-h-9 bg-[#101010] hidden lg:block"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search lg:hidden"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-shopping-cart size-6"><circle cx="8" cy="21" r="1"/>
            <circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
          <div className="flex items-center gap-2 border-2 border-black rounded-full px-3 py-2">
            <div className="bg-[#E9E9E9] rounded-full size-8 flex justify-center items-center relative" 
            ref={userRef}
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" 
                className="lucide lucide-circle-user-round size-6"
                onToggle={toggleUserMenu}>
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
            {isUserOpen && (
                <div className="absolute right-10 mt-2 w-46 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <button className="item- block w-full px-4 py-2 text-left hover:bg-gray-100
                      onClick={toggleLogin}
                      ">
                        Log in
                      </button>
                    </li>
                    <li>
                      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Create an account
                      </button>
                    </li>
                  </ul>
                </div>
              )}
          </div>
        </nav>
      </div>
      
    </div>
  );
}
