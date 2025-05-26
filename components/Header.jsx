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

      <>
        {/* Modal Overlay */}
        <div onClick={() => {
          setTimeout(() => {
            const overlay = document.getElementById('modalOverlay');
            overlay.classList.add('opacity-0', 'pointer-events-none');
            overlay.classList.remove('opacity-100');
          }, 300);

          links.map((link, idx) => {
            const elem = document.getElementById(`${link}-x`);
            elem.style.transitionDelay = (0.3 - (idx + 1) * 0.1).toString() + 's';
            // elem.style.transform = "translateY(500px)";
            elem.classList.add('translate-y-[500px]', 'opacity-0');
            elem.classList.remove('opacity-100');
            elem.style.transitionDuration = (0.3 - (idx + 1) * 0.1).toString() + 's';
          })

          document.getElementById(`social-panel`).classList.add("translate-y-[200px]", "opacity-0");
          document.getElementById(`social-panel`).classList.remove("opacity-100");
          // addClasses('social-panel', ['translate-y-[500px]']);
          document.getElementById(`social-panel`).style.transitionDelay = "0.0s";

          // const buttonSlide = document.getElementById('buttonSlide');
          // buttonSlide.classList.add('translate-y-full', 'opacity-0');
          // buttonSlide.classList.remove('translate-y-0', 'opacity-100');


        }}
          id="modalOverlay"
          className="dark:bg-white/5 bg-black/10  fixed inset-0 backdrop-blur-[20px] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500 z-40"
        >
          {/* Modal Glass */}


          <div className="flex flex-col justify-center items-center space-y-[50px]">
            <div onClick={() => {
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }, 200);
            }} className="">
              <Logo classList="font-bold text-4xl dark:text-gray-200 text-gray-700" />
            </div>

            <div className="flex flex-1 justify-center items-center flex-col gap-y-12">

              {
                links.map((link, idx) => {
                  return <p style={{ cursor: "pointer" }} onClick={() => {
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
                  }} className="opacity-0 translate-y-[500px] capitalize dark:text-gray-200 text-gray-700 text-3xl" key={idx} id={`${link}-x`}>{link}</p>
                })
              }


            </div>

            <div id="social-panel" className=" translate-y-[200px] transition duration-500 opacity-0 flex flex-col justify-content items-center space-y-16">
              <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 "
                iconsStyles="dark:text-gray-200 text-gray-700 text-[20px] hover:text-accent dark:hover:text-accent transition-all" />

            </div>
          </div>
        </div>
      </>


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

            <div onClick={() => {
              const overlay = document.getElementById('modalOverlay');
              const modal = document.getElementById('glassModal');
              // const buttonSlide = document.getElementById('buttonSlide');

              overlay.classList.remove('opacity-0', 'pointer-events-none');
              overlay.classList.add('opacity-100');

              // Trigger fade and scale animation
              // setTimeout(() => {
              //   modal.classList.remove('opacity-0', 'scale-95');
              //   modal.classList.add('opacity-100', 'scale-100');
              // }, 50);

              // Trigger slide-up for button container
              // setTimeout(() => {
              //   buttonSlide.classList.remove('translate-y-full', 'opacity-0');
              //   buttonSlide.classList.add('translate-y-0', 'opacity-100');
              // }, 0);


              links.map((link, idx) => {
                const elem = document.getElementById(`${link}-x`);
                // elem.style.transitionDelay = ((idx + 1) * 0.).toString() + 's';
                elem.classList.remove('translate-y-[500px]', 'opacity-0');
                elem.classList.remove('opacity-100');
                elem.style.transitionDuration = (0.3 + (idx + 1) * 0.1).toString() + 's';
              })



              document.getElementById(`social-panel`).classList.remove("translate-y-[200px]", "opacity-0");
              document.getElementById(`social-panel`).classList.add("opacity-100");
              document.getElementById(`social-panel`).style.transitionDelay = "0.4s";


            }} style={{ cursor: "pointer" }} className="xl:hidden">
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
