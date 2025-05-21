import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown, ChevronDown, Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";


const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-hero_dark">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text  */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="h1 mb-4">Sarwar A. Minhaj</h1>
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Competitive Programmer
            </div>
            {/* <button >X</button> */}
            <p className="subtitle max-w-[490] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            {/* buttons  */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Button onClick={() => {
                const elem = document.getElementById('contact-section');
                elem?.scrollIntoView({
                  behavior: 'smooth'
                })
              }} className="gap-x-2">

                Contact me <Send size={18} />

              </Button>

              <a href="/Resume_Sarowar.pdf" download="Resume.pdf">
                <Button variant="secondary" className="gap-x-2 text-white">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials  */}
            <Socials
              containerStyles="flex gap-x-6 m-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image  */}

        </div>
        {/* icon   */}
        <div className="hidden md:flex absolute left-2/4 botton-44 xl:bottom-12 animate-bounce">
          <ArrowDown className="text-3xl text-primary" />
          {/* <ChevronDown className="text-3xl text-primary" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
