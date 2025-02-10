import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "~/shared/ui/molecules/Menubar";

const NAV_ITEMS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Tours",
    link: "/tours",
    children: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Home 2",
        link: "/home-2",
      },
    ],
  },
  {
    title: "Service",
    link: "/services",
    children: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Home 2",
        link: "/home-2",
      },
    ],
  },
  {
    title: "MICE",
    link: "/mice",
    children: [
      {
        title: "Destination",
        link: "/destination",
      },
      {
        title: "Services",
        link: "/services",
      },
      {
        title: "MICE G.R.O.U.P",
        link: "/mice-group",
      }
    ],
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "About Us",
    link: "/about-us",
    children: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Home 2",
        link: "/home-2",
      },
    ],
  },
  {
    title: "Membership",
    link: "/membership",
  },
];

export function NavBar() {
  return (
    <Menubar className="flex gap-6 text-[#101010] text-base font-normal border-none shadow-none">
      {NAV_ITEMS.map((item) => (
        <Link key={item.link} to={item.link} className="cursor-pointer">
          <MenubarMenu>
            <MenubarTrigger>
              {item.title}
              {item.children && <ChevronDown className="size-4" />}
            </MenubarTrigger>
            {item.children && (
              <MenubarContent>
                {item.children.map((child) => (
                  <MenubarItem key={child.link}>{child.title}</MenubarItem>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        </Link>
      ))}
    </Menubar>
  );
}
