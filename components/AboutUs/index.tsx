import ContentLayout from "@/utils/ContentLayout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <ContentLayout>
      <div
        id="about-us"
        className="flex scroll-m-32 sm:flex-row flex-col px-5 mt-52 gap-16 md:gap-28 pb-28"
      >
        <div className="space-y-3 order-2 sm:order-1 sm:w-[65%]">
          <p className="uppercase font-Raleway font-bold text-gray-500">
            Our Story
          </p>
          <h2 className="text-5xl font-bold font-Raleway pb-3">Who Are We ?</h2>
          <p className="text-lg">
            Ithomlab is a leading web3 agency dedicated to helping individuals
            and businesses thrive in the digital age. With a focus on practical
            skills and real-world applications, our courses and services are
            designed to empower you with the knowledge and tools needed for
            success.
            <br />
            <br />o provide top-notch education and development services that
            enable our clients to achieve their digital goals and stay ahead in
            the rapidly evolving web3 landscape.
          </p>
        </div>
        <div className="sm:w-[50%] order-1 sm:order-2">
          <Image
            src={"/about.jpg"}
            className="w-full object-cover h-full"
            width={1920}
            height={1080}
            alt="about-us"
          />
        </div>
      </div>
    </ContentLayout>
  );
}
