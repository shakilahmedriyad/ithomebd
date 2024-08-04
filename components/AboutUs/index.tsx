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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            adipisci tenetur doloribus omnis distinctio sit sed dolorum quos
            quidem assumenda minima, animi modi eius illum quas quam similique
            in et? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nihil est iure hic adipisci quae ut, illo repudiandae eius sequi
            sapiente vero quo eos consequuntur! Recusandae amet ratione dolores
            doloribus explicabo!
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
