import Image from "next/image";
import ContentLayout from "@/utils/ContentLayout";
import TestimonialsCard from "./TestimonialsCard";

export default function OurCustomers() {
  return (
    <>
      <div className="bg-black text-white py-10">
        <ContentLayout>
          <div className="text-center py-10">
            <p className="text-xl uppercase font-Raleway font-bold text-gray-400">
              Making Waves
            </p>
            <h2 className="text-5xl uppercase mt-4 font-Raleway font-bold mb-8">
              Our Customers
            </h2>
            <div className="flex w-full items-center gap-5 flex-wrap  mt-20 justify-center sm:justify-between mb-20">
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  className="w-40"
                  src="/logo.svg"
                  width={1024}
                  height={1024}
                  alt=""
                />
              ))}
            </div>
          </div>
        </ContentLayout>
      </div>
      <section className="text-center my-20">
        <ContentLayout>
          <p className="text-sm uppercase font-Raleway font-bold text-gray-600">
            What they say about us
          </p>
          <h2 className="text-3xl font-bold font-Raleway uppercase">
            Client Testimonials
          </h2>
          <div className="flex flex-wrap gap-5 justify-between w-full mt-20">
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
          </div>
        </ContentLayout>
      </section>
    </>
  );
}
