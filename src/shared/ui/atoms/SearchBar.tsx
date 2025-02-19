

export function SearchBar() {
    return (
        <div className="bg-[#E9E9E9] px-3 py-3 h-11 rounded-full  w-full flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-search"><circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" /></svg>
            <input
                placeholder="Search "
                className="hidden lg:block text-base font-normal outline-hidden w-full bg-[#E9E9E9]"
            />
        </div>
    );
}