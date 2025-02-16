import { Outlet } from "react-router";
import { SidebarProvider } from "~/shared/ui/sidebar";
import { AdminHeader } from "~/widgets/AdminHeader";
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
