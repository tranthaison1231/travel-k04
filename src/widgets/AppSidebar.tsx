import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { useLocation } from "react-router";
import Logo from "~/assets/images/logo.svg";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/shared/ui/organisms/Sidebar";
import { cn } from "~/shared/utils/cn";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/admin/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/admin/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/admin/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-2 flex justify-center">
            <img src={Logo} alt="" className="w-32 h-16" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn({
                      "bg-primary text-white": location.pathname === item.url,
                    })}
                    size="lg"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
