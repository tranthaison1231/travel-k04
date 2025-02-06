import { Link } from "react-router";
import { Menu } from "./Menu";

const NAV_ITEMS = [
    {
        title: "Home",
        link: "/",
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
        <ul className="flex gap-6 text-[#101010] text-base font-normal">
            {NAV_ITEMS.map((item) => (
                <Link key={item.link} to={item.link} className="cursor-pointer">
                    <Menu title={item.title} />
                </Link>
            ))}
        </ul>
    );
}