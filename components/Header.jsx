"use client";

import { useState, useEffect } from "react";
// components
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";



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

  return (
    <header
      className={`${header ? "py-4 bg-white shadow-lg" : "py-6 dark:bg-[#1f2937]"} sticky top-0 z-50 transition-all bg-[#f5f3ff] dark:bg-[#1f2937]`}
    >

      {/* Backdrop Modal Begin ------------------ */}
      <div style={{ transform: "translateY(-100%)" }} onClick={() => {
        const elem = document.getElementById("backdrop");
        elem.style.transform = "translateY(-100%)"
        document.body.classList.remove('overflow-y-hidden');

        links.map((link) => {
          document.getElementById(`${link}-x`).style.transitionDelay = '0.5s';
          document.getElementById(`${link}-x`).style.transform = "translateY(-500px)";
        })

        // document.getElementById("home-x").style.transform = "translateY(-500px)";
        // document.getElementById("accomplishments-x").style.transform = "translateY(-500px)";
        // document.getElementById("projects-x").style.transform = "translateY(-500px)";
        // document.getElementById("contact-x").style.transform = "translateY(-500px)";

      }} id="backdrop" className="bg-gray-800 bg-opacity-[10%] opacity-100 transition duration-500 z-50 flex flex-col gap-y-12 items-center justify-center top-0 absolute h-screen w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-[20px]">

        {/* <div> <Logo /></div> */}



        {
          links.map((link, idx) => {
            return <p onClick={() => {
              setTimeout(() => {
                const elem = document.getElementById(`${link}-section`);
                elem?.scrollIntoView({
                  behavior: 'smooth'
                })
                if (link === 'home') {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }, 500);
            }} key={idx} id={`${link}-x`} style={{ transform: "translateY(-500px)", cursor: "pointer" }} className="capitalize text-tertiary text-3xl">{link}</p>
          })
        }


        {/* <p id="home-x" style={{ transform: "translateY(-500px)" }} className="transition duration-2000 text-primary text-3xl">Home</p>
        <p id="accomplishments-x" style={{ transform: "translateY(-500px)" }} className="transition duration-5000 text-primary text-3xl">accomplishments</p>
        <p id="projects-x" style={{ transform: "translateY(-500px)" }} className="transition duration-5000 text-primary text-3xl">projects</p>
        <p id="contact-x" style={{ transform: "translateY(-500px)" }} className="transition duration-5000 text-primary text-3xl">contact</p> */}
        {/* <p  className="text-primary text-3xl">Accomplishments</p>
        <p className="text-primary text-3xl">Projects</p>
        <p className="text-primary text-3xl">Contact</p> */}
      </div>
      {/* Backdrop Modal End ------------------ */}

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* {nav} */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* {mobile nav} */}
            <div style={{ cursor: "pointer" }} onClick={() => {
              const elem = document.getElementById("backdrop");
              document.body.classList.add('overflow-y-hidden');
              elem.style.transform = "translateY(0%)"
              const links = ["home", "accomplishments", "projects", "contact"];
              links.map((link, idx) => {
                document.getElementById(`${link}-x`).style.transitionDelay = '0s';
                document.getElementById(`${link}-x`).style.transform = "translateY(0px)";
                document.getElementById(`${link}-x`).style.transitionDuration = (0.8 - idx * 0.25).toString() + 's';
              })



            }} className="xl:hidden">
              {/* <MobileNav /> */}
              <Menu />
              {/* <p>Dog</p> */}

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
