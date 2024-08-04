import ContentLayout from "@/utils/ContentLayout";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-black  flex py-24 text-white">
      <ContentLayout>
        <div className="flex sm:flex-row flex-col items-center gap-14 ">
          <div className="sm:w-[70%]">
            <h1 className="text-5xl font-medium">
              Ready to Grow Your Business?
            </h1>
            <p className="mt-6">
              We help brands cultivate a passionate community of advocates ready
              to invest in and promote their products
            </p>
            <Button className="mt-6 text-xl" size={"lg"} variant={"secondary"}>
              GET IN TOUCH
            </Button>
          </div>
          <div className=" sm:w-[30%] space-y-2 flex flex-col w-full  sm:justify-center">
            <h1 className="text-3xl font-medium">Our office</h1>
            <p>
              Business Bay, <br /> Mirpur <br /> Dhaka,Bangladesh
            </p>
            <div className="flex gap-1 items-center w-full">
              <FaTelegram size={30} />
              <AiFillTwitterCircle size={33} />
            </div>
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
}
