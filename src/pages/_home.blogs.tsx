import { Outlet } from "react-router";
import { Join } from "~/widgets/Join";
import Blogs from "~/features/home-page/ui/Blogs";

export default function Home() {
  return (
    <div className="">
      <Blogs />
      <Outlet />
      <Join />
    </div>
  );
}
