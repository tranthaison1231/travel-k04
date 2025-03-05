import { Outlet } from "react-router";
import { AdminHeader } from "~/features/home-page/ui/AdminHeader";
import { SidebarProvider } from "~/shared/ui/molecules/Sidebar";
import { AppSidebar } from "~/widgets/AppSidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <AdminHeader />
        <main className="h-full p-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
