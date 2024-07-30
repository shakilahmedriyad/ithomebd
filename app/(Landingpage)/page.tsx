import AboutUs from "@/components/AboutUs";
import CarouselSection from "@/components/CarouselSection";
import HeadingSection from "@/components/HeadingSection";
import OurCustomers from "@/components/OurCustomers/OurCustomers";
import OurServices from "@/components/OurServices/OurServices";

export default function Home() {
  return (
    <main className="">
      <HeadingSection />
      <AboutUs />
      <CarouselSection />
      <OurServices />
      <OurCustomers />
    </main>
  );
}
