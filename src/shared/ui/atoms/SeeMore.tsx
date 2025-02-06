

export function SeeMore() {
    return(
        <div className="">
            <button className="text-[#294D81] text-base font-normal flex items-center justify-center gap-2 border border-[#294D81] px-8 py-5">
            See more 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-arrow-right size-6">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
        </div>
    );
}