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

  return (
    <header
      className={`${header ? "py-4 bg-white shadow-lg" : "py-6 dark:bg-[#1f2937]"} sticky top-0 z-50 transition-all bg-[#f5f3ff] dark:bg-[#1f2937]`}
    >


      <div onClick={() => {
        // document.getElementById("backdrop").classList.remove('opacity-100');
        // document.getElementById("backdrop").classList.remove('z-50');

        removeClasses("backdrop", ['opacity-100', 'z-50', 'scale-0']);
        addClasses("backdrop", ['opacity-0', '-z-50', 'scale-100']);


        // document.getElementById("backdrop").classList.add('opacity-0');
        // document.getElementById("backdrop").classList.add('-z-50');


      }} id="backdrop" className="origin-bottom scale-0 bg-gray-100 bg-opacity-[10%] opacity-0 transition duration-500 -z-50 flex flex-col gap-y-12 items-center justify-start top-0 absolute h-screen w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-[20px]">
        <div className="mt-16">
          <Logo />
        </div>


      </div>

      {/* Backdrop Modal Begin ------------------ */}
      <div style={{ transform: "translateY(100%)" }} onClick={() => {
        const elem = document.getElementById("links-panel");
        elem.style.transform = "translateY(100%)"
        document.body.classList.remove('overflow-y-hidden');

        links.map((link) => {
          document.getElementById(`${link}-x`).style.transitionDelay = '0.5s';
          document.getElementById(`${link}-x`).style.transform = "translateY(500px)";
        })

        // document.getElementById(`social-panel`).classList.remove("translate-y-[500px]");
        // document.getElementById(`social-panel`).classList.add("translate-y-[500px]");
        addClasses('social-panel', ['translate-y-[500px]']);
        document.getElementById(`social-panel`).style.transitionDelay = "0.0s";


        removeClasses('backdrop', ['opacity-100', 'scale-100'])
        // document.getElementById("backdrop").classList.remove('opacity-100');
        // document.getElementById("backdrop").classList.remove('z-50');

        addClasses('backdrop', ['opacity-0', 'scale-0'])
        // document.getElementById("backdrop").classList.add('opacity-0');
        // document.getElementById("backdrop").classList.add('-z-50');

        // document.getElementById("home-x").style.transform = "translateY(-500px)";
        // document.getElementById("accomplishments-x").style.transform = "translateY(-500px)";
        // document.getElementById("projects-x").style.transform = "translateY(-500px)";
        // document.getElementById("contact-x").style.transform = "translateY(-500px)";

      }} id="links-panel" className="transition duration-500 z-50 flex flex-col items-center justify-between top-0 absolute h-screen w-full">

        {/* <div> <Logo /></div> */}



        <div className="flex h-[100%] justify-center items-center flex-col gap-y-12">

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
              }} key={idx} id={`${link}-x`} style={{ transform: "translateY(500px)", cursor: "pointer" }} className="capitalize dark:text-gray-200 text-accent text-3xl">{link}</p>

            })
          }
        </div>

        <div id="social-panel" className="mb-[30%] translate-y-[500px] transition duration-500" >
          <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 "
            iconsStyles="text-tertiary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all" />
        </div>


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
            <div style={{ cursor: "pointer" }}
              onClick={() => {
                const elem = document.getElementById("links-panel");
                document.body.classList.add('overflow-y-hidden');
                elem.style.transform = "translateY(0%)"
                const links = ["home", "accomplishments", "projects", "contact"];



                links.map((link, idx) => {
                  const elem = document.getElementById(`${link}-x`);
                  elem.style.transitionDelay = '0s';
                  elem.style.transform = "translateY(0px)";
                  elem.style.transitionDuration = (idx * 0.2).toString() + 's';
                })


                addClasses("backdrop", ['opacity-100', 'z-50', 'scale-100']);

                // document.getElementById("backdrop").classList.add('opacity-100');
                // document.getElementById("backdrop").classList.add('z-50');

                removeClasses("backdrop", ['opacity-0', '-z-50', 'scale-0']);
                // document.getElementById("backdrop").classList.remove('opacity-0');
                // document.getElementById("backdrop").classList.remove('-z-50');


                removeClasses("social-panel", ['translate-y-[500px]']);
                // document.getElementById(`social-panel`).classList.remove("translate-y-[500px]");
                document.getElementById(`social-panel`).style.transitionDelay = "0.2s";







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
