import { Outlet } from "react-router";
import { Header } from "../widgets/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
