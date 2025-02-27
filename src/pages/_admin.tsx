import { Outlet } from "react-router";
import { AdminHeader } from "~/features/home-page/ui/AdminHeader";
import { SidebarProvider } from "~/shared/ui/molecules/Sidebar";
import { AppSidebar } from "~/widgets/AppSidebar";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer autoClose={3000} />
    </SidebarProvider>
  );
}
