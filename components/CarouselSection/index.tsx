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
export default function CarouselSection() {
  return (
    <div className="py-10 bg-gray-200">
      <ContentLayout>
        <h1 className="text-center text-5xl font-medium my-10 uppercase">
          Our courses
        </h1>
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
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
