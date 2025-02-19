import { Outlet } from "react-router";
import { SidebarProvider } from "~/shared/ui/organisms/Sidebar";
import { AdminHeader } from "~/widgets/AdminHeader";
import { AppSidebar } from "~/widgets/AppSidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <AdminHeader />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
