import { Outlet } from "react-router";
import { Footer } from "~/widgets/Footer";
import { Header } from "~/widgets/Header";
import { SettingHeader } from "~/widgets/SettingHeader";

export default function Home() {
  return (
    <div>
      <SettingHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
