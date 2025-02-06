import { useNavigate } from "react-router";

interface TourProps {
  name: string;
  image: string;
  time: string;
  description: string;
  oldPrice: string;
  price: string
}

export function Tour({ name, image, time, description, oldPrice, price }: TourProps) {
  const navigate = useNavigate()

  function handelClick() {
    navigate("/tours")
  }
  return (
    <div className=""
      onClick={handelClick}
    >
      <div className="relative mb-6 cursor-pointer">
        <img src={image} alt="" className="" />
        <div className="flex gap-2 absolute top-3 right-3">
          <p className="bg-[#09873e] text-white text-sm font-medium px-2 py-1 rounded-full">Daily tour</p>
          <p className="bg-[#f07132] text-white text-sm font-medium px-2 py-1 rounded-full">Promotion</p>
        </div>
      </div>
      <div className="">
        <p className="text-[#182D4C] text-2xl font-semibold mb-3">{name} Tour</p>
        <div className="flex gap-2 mb-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-clock size-4"
          ><circle cx="12" cy="12" r="10" /
            ><polyline points="12 6 12 12 16 14" /></svg>
          <p className="text-[#515151] text-base font-normal" >{time}</p>
        </div>
        <div className="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-route size-10"
          ><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></svg>
          <p className="text-[#515151] text-base font-normal mb-3" >{description}</p>
        </div>
        <p className="text-[#9B9B9B] text-lg font-normal line-through ">{oldPrice}</p>
        <p className="text-lg font-normal mb-6"><span className="text-[#203B64] text-3xl font-bold">{price}</span>/pax</p>
        <div className="flex gap-3">
          <p className="text-base font-medium ">More detail </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-arrow-right size-">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </div>
      </div>
    </div>
  );
}