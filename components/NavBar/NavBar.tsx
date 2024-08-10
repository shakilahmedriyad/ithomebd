"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  const navLinks = [
    { label: "Home", id: "home", link: "/" },
    { label: "About Us", id: "about-us", link: "#" },
    { label: "services", id: "services", link: "#" },
    { label: "Contact us", id: "contact-us", link: "#" },
  ];

  const handleScrollIntoView = (slug: string) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={classNames(
        "fixed bg-black z-30   duration-700 text-white w-full"
      )}
    >
      <nav className="flex  justify-between  items-center  max-w-[72rem] px-5 mx-auto">
        <Link href={"/"}>
          <div className="flex cursor-pointer ">
            <Image
              src={"/logo-1.png"}
              width={500}
              className="w-24"
              height={500}
              alt="logo"
            />
          </div>
        </Link>
        <ul className="hidden md:flex items-center  gap-5">
          {navLinks.map((item, index) =>
            index == 0 ? (
              <Link href={item.link} key={item.id}>
                <li className="uppercase cursor-pointer hover:text-gray-200 flex gap-5">
                  {item.label}
                </li>
              </Link>
            ) : (
              <li
                onClick={() => handleScrollIntoView(item.id)}
                key={item.id}
                className="uppercase cursor-pointer hover:text-gray-200 flex gap-5"
              >
                {item.label}
              </li>
            )
          )}
        </ul>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="md:hidden visible">
          <Sheet>
            <SheetTrigger asChild>
              <RxHamburgerMenu
                className="cursor-pointer"
                size={25}
                color="white"
              />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col my-16 items-center text-black gap-5">
                {navLinks.map((item, index) =>
                  index == 0 ? (
                    <Link href={item.link} key={item.id}>
                      <li className="uppercase cursor-pointer  flex gap-5">
                        {item.label}
                      </li>
                    </Link>
                  ) : (
                    <li
                      onClick={() => handleScrollIntoView(item.id)}
                      key={item.id}
                      className="uppercase cursor-pointer  flex gap-5"
                    >
                      {item.label}
                    </li>
                  )
                )}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
