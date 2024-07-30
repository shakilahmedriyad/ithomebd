import ContentLayout from "@/utils/ContentLayout";
import { Button } from "../ui/button";

export default function HeadingSection() {
  return (
    <div className="relative min-h-screen w-full">
      <video
        src="/bgVideo.mp4"
        loop
        className="w-full h-full  absolute object-cover"
        autoPlay
        muted
      />
      <ContentLayout>
        <div className="relative mx-5  pt-[20rem] z-10 text-white">
          <h3 className="text-7xl font-medium">Full-Service Web</h3>
          <h3 className="text-7xl font-medium">3.0 Agency</h3>
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
