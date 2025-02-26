import Blog5 from "~/assets/images/blog5.png";
import latest from "~/assets/images/latest.png";
import { ReadPost } from "~/shared/ui/atoms/ReadPost";
import { LatestPosts } from "~/widgets/LatestPosts";
import { MenuBar } from "~/widgets/MenuBar";
import { useNavigate } from "react-router";

const LATESTPOSTS = [
  {
    img: latest,
    data: "Oct 13, 2024",
    title: "10 Most Frequently Asked Questions About Team Retreats",
  },
  {
    img: latest,
    data: "Oct 13, 2024",
    title: "10 Most Frequently Asked Questions About Team Retreats",
  },
  {
    img: latest,
    data: "Oct 13, 2024",
    title: "10 Most Frequently Asked Questions About Team Retreats",
  },
  {
    img: latest,
    data: "Oct 13, 2024",
    title: "10 Most Frequently Asked Questions About Team Retreats",
  },
];

const MENUBAR = [
  {
    name: "All Post",
  },
  {
    name: "Travel Updates",
  },
  {
    name: "Buddy’s top reviews",
  },
  {
    name: "Travel Tips",
  },
  {
    name: "Buddy’s News",
  },
]


export default function Blog() {

  const navigate = useNavigate();

  function onPost() {
      navigate("/article")
  }


  return (
    <div>
      <div className="text-center bg-[#EBF0F8] py-28">
        <h1 className="text-5xl font-normal text-[#3562A6] mb-4">Travel Buddy Blog</h1>
        <p className="text-lg font-normal w-3/5 mx-auto">Discover the thrill of your next adventure! Gather inspiration, pack your luggage, gain valuable experiences, and update your information to transform your upcoming trips into unforgettable journeys!</p>
      </div>
      <div className="flex items-center justify-center gap-16 border-b border-[#bcbcbc] mb-13">
        {MENUBAR.map((item) => (
          <MenuBar name={item.name} />
        ))}
      </div>
      <div className="px-20 flex gap-6">
        <div className=" w-2/3">
          <p className="text-3xl font-normal mb-6">Latest post</p>
          <div className="relative mb-9">
            <img src={Blog5} alt="" className="" />
            <p className="bg-[#3562A6] text-white text-sm font-medium px-2 py-1 rounded-full absolute top-7 left-7">Location</p>
          </div>
          <p className="text-sm font-normal text-[#6E6E6E] mb-3">Oct 13, 2024</p>
          <p className="text-2xl font-semibold mb-3 uppercase">10 Most Frequently Asked Questions About Team Retreats</p>
          <p className="text-lg font-normal text-[#515151] mb-8">The best coffee shops, coworking spots, gyms, yoga studios and places to live and stay in Mexico City.</p>
          <div onClick={onPost}>
            <ReadPost/>
          </div>
        </div>
        <div className="w-1/3">
          <p className="text-3xl font-normal mb-6">Search the blog</p>
          <input
            placeholder="Search "
            className="hidden lg:block h-11 w-full text-base font-normal outline-hidden border-2 px-3 py-3 rounded-full mb-8"
          />
          <p className="text-3xl font-normal mb-6">Latest posts</p>
          {LATESTPOSTS.map((post) => (
            <LatestPosts
              img={post.img}
              data={post.data}
              title={post.title}
            />
          ))}
        </div>
      </div>
      <div className="mx-20 h-0.5 my-16 bg-black"></div>
      
    </div>
  );
}
