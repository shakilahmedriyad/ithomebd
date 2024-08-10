import Image from "next/image";
import ContentLayout from "@/utils/ContentLayout";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { MdOutlineTimer } from "react-icons/md";
export default function CarouselSection() {
  return (
    <div className="py-10 bg-gray-200">
      <ContentLayout>
        <h1 className="text-center text-5xl font-medium my-10 uppercase">
          Our courses
        </h1>
        <div className="flex gap-5 md:flex-row flex-col items-center w-full justify-center">
          {Array.from({ length: 2 }).map((_, index) => (
            <Link key={index} className="" href={`/course/${12}`}>
              <div className="p-1">
                <Card className="max-w-[22rem]">
                  <CardContent className="flex flex-col  aspect-square  justify-center p-3 ">
                    <Image
                      src={"/course/facebook-marketing.png"}
                      alt="facebook marketing"
                      className="max-w-[20rem] h-full"
                      width={1920}
                      height={1080}
                    />
                    <div className="text-left space-y-2 mt-7">
                      <h2 className="text-2xl font-Raleway font-bold">
                        Facebook Marketing
                      </h2>
                      <div className="">
                        <p className="line-clamp-1 text-gray-600 text-sm">
                          Emran haque, Blockchain enthusiast || Web3 Community
                          Management |Growth Hacker | Web3 Marketing
                        </p>
                        <div className="flex font-bold my-1 items-center gap-1">
                          <p>5.0</p>
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="text-xs text-gray-600">(22+)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineTimer size={25} />
                        <p>36 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-48 gap-10 md:flex-row flex-col flex w-full justify-between ">
          <div className="md:w-[50%] order-2 md:order-1 space-y-2">
            <p className="uppercase font-Raleway font-bold text-gray-500">
              The future
            </p>
            <h2 className="text-3xl uppercase font-Raleway font-bold">
              Moving Into The Digital Era
            </h2>
            <p>
              With the wave of new technology, the rules in marketing are
              changing. Luckily, we are quick adapters. We are constantly
              learning and improving our strategies to support our clients.
              <br />
              <br />
              From small, innovative startups to established, multinational
              corporations, we understand that each client has their own set of
              goals and objectives. That’s why we take a personalized approach,
              taking the time to get to know our clients and understand their
              vision.
              <br />
              <br />
              New technology is not just a tool, but a catalyst for
              transformational change.
            </p>
          </div>
          <div className="md:w-[50%] md:order-2 order-1 flex justify-end">
            <iframe
              className="w-full h-full"
              src="https://lottie.host/embed/79fa66c3-33e8-42af-a4d9-207c86024e10/KXGrvi5iPU.json"
            ></iframe>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}
