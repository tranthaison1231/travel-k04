import { useNavigate } from "react-router";
import Logo from "~/assets/images/logo.svg";
import { SearchBar } from "~/shared/ui/atoms/SearchBar";
import { useDropdown } from "~/shared/ui/molecules/useDropdown";
import { NavBar } from "~/widgets/NavBar";
import { UserMenu } from "~/widgets/UserMenu";

export function Header() {
  const { toggleDropdown, DropdownMenu } = useDropdown([
    { label: "Login", link: "/login" },
    { label: "Create an account", link: "/register" },
  ]);

  const navigate = useNavigate()

  function onHome() {
    navigate("/")
  }

  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between lg:px-20 lg:py-3 px-[20px] py-2 overflow-x-auto">
        <div className="flex items-center gap-5 w-120">
          <img src={Logo} alt="" className="w-32 h-16"
            onClick={onHome}
          />
          <SearchBar />
        </div>
        <nav className="flex items-center gap-6">
          <div className="hidden lg:block ">
            <NavBar />
          </div>
          <div className="">
            <UserMenu />
          </div>
        </nav>
      </div>
    </div>
  );
}
