import ContentLayout from "@/utils/ContentLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OurServices() {
  return (
    <ContentLayout>
      <section id="services" className="py-16 scroll-m-24 ">
        <div className="mb-10">
          <h1 className="text-center font-Raleway font-bold text-gray-600 uppercase text-xl">
            High value
          </h1>
          <p className="text-center font-Raleway text-5xl font-bold uppercase ">
            Our Services
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl sm:text-4xl font-Raleway font-semibold">
              Web Development Services
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl sm:text-4xl font-Raleway font-semibold">
              Digital Marketing Services
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl sm:text-4xl font-Raleway font-semibold">
              Community Engagement
            </AccordionTrigger>
            <AccordionContent>
              Yes. {"It's"} animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </ContentLayout>
  );
}
