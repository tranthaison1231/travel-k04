import { Outlet } from "react-router";
import { Header } from "~/widgets/Header";
import { SettingHeader } from "~/widgets/SettingHeader";
import { Footer } from "~/widgets/Footer";

export default function Home() {
  return (
    <div>
      <SettingHeader/>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
