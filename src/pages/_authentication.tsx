import { Outlet } from "react-router";
import AuthenticationBackground from "~/assets/images/authen-background.png";
import Logo from "~/assets/images/logo.svg";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 px-20 py-26">
        <img src={Logo} className="mx-auto" />
        <Outlet />
      </div>
      <img src={AuthenticationBackground} className="w-1/2 block" />
    </div>
  );
}
