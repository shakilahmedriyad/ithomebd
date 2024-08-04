import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContentLayout from "@/utils/ContentLayout";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
export default function CarouselSection() {
  return (
    <div className="py-10 bg-gray-200">
      <ContentLayout>
        <h1 className="text-center text-5xl font-medium my-10 uppercase">
          Our courses
        </h1>
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1 w-full">
            {Array.from({ length: 4 }).map((_, index) => (
              <Link
                className="pl-1 max-w-[33%] "
                href={`/course/${index}`}
                key={index}
              >
                <CarouselItem className="w-full">
                  <div className="p-1">
                    <Card className="max-w-[100%]">
                      <CardContent className="flex flex-col  aspect-square  justify-center p-6">
                        <Image
                          src={"/course/facebook-marketing.png"}
                          alt="facebook marketing"
                          className="w-full h-full"
                          width={1920}
                          height={1080}
                        />
                        <div className="text-left space-y-2 mt-7">
                          <h2 className="text-2xl font-semibold">
                            Facebook marketing
                          </h2>
                          <div className="flex justify-between">
                            <p>milestone:36</p>
                            <p>lession:124</p>
                          </div>
                          <p>total: 36 hours</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-48 gap-10 md:flex-row flex-col flex w-full justify-between ">
          <div className="md:w-[50%] order-2 md:order-1 space-y-5">
            <p className="text-2xl">The future</p>
            <h2 className="text-4xl font-medium">
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
            <Image
              src="/sysadmin.jpg"
              className="rounded-full md:h-[25rem] object-cover  md:w-[25rem]"
              alt=""
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}
