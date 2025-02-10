import { useNavigate } from "react-router";
import Logo from "~/assets/images/logo.svg";
import { SearchBar } from "~/shared/ui/atoms/SearchBar";
import { UserMenu } from "~/widgets/UserMenu";
import { NavBar } from "./Navbar";

export function Header() {
  const navigate = useNavigate();

  function onHome() {
    navigate("/");
  }

  return (
    <div>
      <div className="flex items-center justify-between lg:px-20 lg:py-3 px-[20px] py-2">
        <div className="flex items-center gap-5 w-120">
          <img src={Logo} alt="" className="w-32 h-16" onClick={onHome} />
          <SearchBar />
        </div>
        <nav className="flex items-center gap-6">
          <div className="hidden lg:block ">
            <NavBar />
          </div>
          <div>
            <UserMenu />
          </div>
        </nav>
      </div>
    </div>
  );
}
