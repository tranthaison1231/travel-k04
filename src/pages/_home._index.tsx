import { OurService } from "~/widgets/OurService";
import { OurDestination } from "~/widgets/OurDestination";
import { Testimonial } from "~/widgets/Testimonial";
import { OurBlogs } from "~/widgets/OurBlogs";
import { About } from "~/features/home-page/ui/About";
import { Banner } from "~/features/home-page/ui/Banner";
import { BestSellerTours } from "~/features/home-page/ui/BestSellerTours";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <BestSellerTours />
      <OurService />
      <OurDestination />
      <Testimonial />
      <OurBlogs />
    </div>
  );
}
