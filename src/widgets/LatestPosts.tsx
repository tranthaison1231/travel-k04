interface LatestPostsProps {
    img: string;
    data: string;
    title: string;
}

export function LatestPosts({ img, data, title }: LatestPostsProps) {
    return (
        <div>
            <div className="flex gap-3 mb-4">
            <img src={img} alt="" className="size-32" />
            <div className="">
              <p className="text-sm font-normal text-[#6E6E6E] mb-3">{data}</p>
              <p className="text-lg font-medium mb-3">{title}</p>
              <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full w-16">Location</p>
            </div>
          </div>
        </div>
    );
}