import CourseDetailsBar from "@/components/CourseDetails/CourseDetailsBar";
import { Button } from "@/components/ui/button";
import ContentLayout from "@/utils/ContentLayout";
import Image from "next/image";

export default function Course({ params }: { params: { courseId: string } }) {
  return (
    <ContentLayout>
      <section className="mt-10 lg:max-w-[80%]">
        <h1 className="text-2xl font-bold">
          Mastering SEO Marketing: From Basics to Advanced Strategies
        </h1>
        <div className="flex gap-5 flex-wrap w-full items-center  mt-10">
          <div className="flex items-center">
            <Image
              src={"/avatar.jpg"}
              alt="profile pic"
              className="w-14 h-14 object-cover rounded-full"
              width={100}
              height={100}
            />
            <div className="ml-4 pr-5  border-r">
              <p className="text">Teacher</p>
              <p className=" text-sm text-gray-500">Emran Hauqe </p>
            </div>
          </div>
          <div className="border-r pr-5">
            <p className="text">Categories</p>
            <p className=" text-sm text-gray-500">Digital marketing </p>
          </div>
          <div className="border-r pr-5">
            <p>Review</p>
            <p className=" text-sm">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="flex items-end">
            <p className="text-gray-600 line-through">৳4900.00</p>
            <p className="ml-4 text-2xl mr-5 font-bold text-red-500">
              ৳3900.00
            </p>
            <Button className="bg-red-600" size={"lg"}>
              Buy Now
            </Button>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src={"/SEO.jpg"}
            className="rounded-sm"
            alt="cover pic"
            width={1920}
            height={1080}
          />
        </div>
        <CourseDetailsBar />
      </section>
    </ContentLayout>
  );
}
