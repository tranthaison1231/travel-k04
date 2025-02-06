import { About } from "~/widgets/About";
import { Banner } from "~/widgets/Banner";
import { BestSellerTours } from "~/widgets/BestSellerTours";
import { OurService } from "~/widgets/OurService";
import { OurDestination } from "~/widgets/OurDestination";
import { Testimonial } from "~/widgets/Testimonial";
import { OurBlogs } from "~/widgets/OurBlogs";

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
