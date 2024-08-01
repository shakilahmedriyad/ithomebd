"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [position, setPosition] = useState(0);
  const pathName = usePathname();
  const navLinks = [
    { label: "Home", id: "home", link: "/" },
    { label: "About Us", id: "about-us", link: "#" },
    { label: "services", id: "services", link: "#" },
    { label: "Contact us", id: "contact-us", link: "#" },
  ];

  useEffect(() => {
    const handler = () => {
      setPosition(window.scrollY);
    };
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={classNames(
        "fixed bg-black z-30 py-2  duration-700 text-white w-full",
        position > 30 || pathName != "/" ? "bg-black" : "bg-transparent"
      )}
    >
      <nav className="flex  justify-between  items-center  max-w-[72rem] px-5 mx-auto">
        <div className="flex">
          <Image
            src={"/logo-1.png"}
            width={500}
            className="w-28"
            height={500}
            alt="logo"
          />
        </div>
        <ul className="flex items-center  gap-5">
          {navLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              <li className="uppercase cursor-pointer hover:text-gray-200 flex gap-5">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
