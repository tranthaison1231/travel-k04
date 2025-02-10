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
    title: "Tours",
    link: "/tours",
  },
  {
    title: "Service",
    link: "/services",
  },
  {
    title: "MICE",
    link: "/mice",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "About Us",
    link: "/about-us",
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
            <MenubarTrigger>{item.title}</MenubarTrigger>
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
