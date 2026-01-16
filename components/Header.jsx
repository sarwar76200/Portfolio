"use client";

import { useState, useEffect } from "react";
// components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Socials from "./Socials";
import MobileNavNew from "./MobileNavNew";
// import { CircleX } from 'lucide-react';


const links = ["home", "accomplishments", "projects", "contact"];

const header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });



  const addClasses = (id, classNames) => {
    const elem = document.getElementById(id);
    classNames.map((className) => {
      elem.classList.add(className);
    })
  }
  const removeClasses = (id, classNames) => {
    const elem = document.getElementById(id);
    classNames.map((className) => {
      elem.classList.remove(className);
    })
  }

  const links = ["home", "accomplishments", "projects", "contact"];

  return (
    <header
      className={`${header ? "py-4 bg-white shadow-lg" : "py-6 dark:bg-[#1f2937]"} sticky top-0 z-50 transition-all bg-[#f5f3ff] dark:bg-[#1f2937]`}
    >

      {/* <MobileNavNew /> */}


      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }} >
            <Logo />
          </div>
          <div className="flex items-center gap-x-6">
            {/* {nav} */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* {mobile nav} */}

            <div style={{ cursor: "pointer" }} className="xl:hidden">
              <MobileNavNew />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
