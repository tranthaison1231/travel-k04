

export function Article() {
    return (
        <div className="">
            <div className="w-2/3">
                <button className="text-xl font-normal flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" 
                    height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    className="lucide lucide-arrow-left size-6"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    All post
                </button>
                <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full absolute top-7 left-7">Location</p>

            </div>
            <div className="w-1/3">

            </div>
        </div>
    );
}