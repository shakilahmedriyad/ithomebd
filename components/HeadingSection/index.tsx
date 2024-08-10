import ContentLayout from "@/utils/ContentLayout";
import { Button } from "../ui/button";

export default function HeadingSection() {
  return (
    <div className="relative min-h-screen w-full">
      <video
        src="/bgvideo.mp4"
        loop
        className="w-full brightness-75 h-full absolute object-cover"
        autoPlay
        muted
      />
      <ContentLayout>
        <div className="relative max-w-[50rem] mx-5  pt-[20rem] z-10 text-white">
          <h3 className="text-6xl  font-Raleway font-bold">
            Learn Blockchain with Ithomlab
          </h3>
          <p className="text-xl mt-4 font-medium">
            Empowering Your Web3 Journey with Expert Guidance and Cutting-Edge
            Solutions
          </p>
          <Button
            className="uppercase text-2xl mt-8 hover:text-white bg-white text-black !py-8 "
            size={"lg"}
          >
            Get In touch
          </Button>
          <div className="flex gap-4 mt-12">
            <div>
              <p className="text-4xl font-bold">7+</p>
              <p>years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100+</p>
              <p>Client served</p>
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}
