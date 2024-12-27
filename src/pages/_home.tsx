import { Outlet } from "react-router";
import { Header } from "../widgets/Header";
import { Travel } from "../widgets/Travel";

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <Travel />
    </div>
  );
}
