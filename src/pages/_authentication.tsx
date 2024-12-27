import { Outlet } from "react-router";
import AuthenticationBackground from "~/assets/images/authen-background.png";
import Logo from "~/assets/images/logo.svg";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="lg:w-1/2 p-4 lg:px-20 overflow-y-scroll">
        <img src={Logo} className="lg:mx-auto pt-6 pr-5 mb-10" />
        <Outlet />
      </div>
      <img src={AuthenticationBackground} className="hidden w-1/2 lg:block" />
    </div>
  );
}
