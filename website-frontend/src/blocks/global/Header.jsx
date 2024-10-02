import React from "react";
import header from "@/globalData/header.json";
import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom id="header">
      <div className="w-full h-[10vh] sticky bg-gray-100 z-10 p-5 text-center flex justify-between md:justify-evenly items-center shadow-md top-0">
        <div className="flex h-10 w-20">
          {header.logo && (
            <img
              src={header.logo.url}
              alt={header.logo.alt}
              width={header.logo.width}
              className="object-contain"
            />
          )}
        </div>

        <div className="hidden md:flex gap-8">
          {header.navLinks.map((link, index) => {
            return (
              <div key={index}>
                <Link
                  className="hover:underline text-xl font-light mx-0 text-gray-500 sm:mx-5"
                  href={link.link}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2"></div>
      </div>
    </Headroom>
  );
}
