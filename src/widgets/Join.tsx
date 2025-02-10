import Our from "~/assets/images/our.png";

export function Join() {
  return (
    <div className="flex">
      <div className="py-10 pl-20 pr-10 w-1/2 bg-[#ebf0f8] text-center ">
        <p className="text-xl font-normal mb-6 uppercase text-[#515151]">
          Join Us
        </p>
        <p className="text-[#3562A6] text-5xl font-normal mb-8">
          Vietnam in your hand
        </p>
        <p className="text-xl font-normal mb-6 text-[#515151]">
          Lorem ipsum dolor sit amet consectetur. Quis magna facilisis eleifend
          nunc in. Mauris eget bibendum nunc sit suspendisse sapien.
        </p>
        <div className="">
          <p className="text-[#3A6CB6] text-base font-medium">Book a Trip</p>
        </div>
      </div>
      <img src={Our} alt="" className="w-1/2" />
    </div>
  );
}

