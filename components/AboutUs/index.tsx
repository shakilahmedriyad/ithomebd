import ContentLayout from "@/utils/ContentLayout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <ContentLayout>
      <div className="flex sm:flex-row flex-col px-5 mt-52 gap-16 md:gap-28 pb-28">
        <div className="space-y-3 order-2 sm:order-1 sm:w-[65%]">
          <p>Our Story</p>
          <h2 className="text-5xl font-medium">Who Are We</h2>
          <p>
            Avinya Labs is the trusted advisor for brands that want to be heard.
            We specialize in building your brand and flourishing it with
            credibility in today’s media-saturated world where attention spans
            are limited. With a team of over 20 employees, offices in 3
            continents, and our expertise in Web 2 and Web 3 since 2017, we
            strive to create impactful campaigns that will be talked about for
            years. We’re committed to excellence.
          </p>
        </div>
        <div className="sm:w-[35%] order-1 sm:order-2">
          <Image
            src={"/logo.jpg"}
            className="w-full"
            width={1920}
            height={1080}
            alt="about-us"
          />
        </div>
      </div>
    </ContentLayout>
  );
}
