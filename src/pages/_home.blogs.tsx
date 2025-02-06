import  Blogs from "~/widgets/Blogs";
import { Outlet } from "react-router";
import { Join } from "~/widgets/Join";

export default function Home() {
  return (
    <div className="">
      < Blogs />
      < Outlet />
      < Join />
    </div>
    
  );
}
