"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function NavBar() {
  const [position, setPosition] = useState(0);
  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "services", id: "services" },
    { label: "Contact us", id: "contact-us" },
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
        "fixed bg-black z-30 pt-7 pb-10 duration-700 text-white w-full",
        position > 30 ? "bg-black" : "bg-transparent"
      )}
    >
      <nav className="flex  justify-between  items-end  max-w-[72rem] px-5 mx-auto">
        <div className="flex">
          <Image
            src={"/logo.svg"}
            width={500}
            className="w-60"
            height={500}
            alt="logo"
          />
        </div>
        <ul className="flex items-center mb-1 gap-5">
          {navLinks.map((item) => (
            <li
              className="uppercase cursor-pointer hover:text-gray-200 flex gap-5"
              key={item.id}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
