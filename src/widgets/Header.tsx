import { Link } from "react-router";

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

export function Header() {
  return (
    <div>
      <nav>
        <ul className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.link} to={item.link} className="cursor-pointer">
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
