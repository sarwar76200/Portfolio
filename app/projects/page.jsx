"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { RiArrowDownLine } from "react-icons/ri";

const projectData = [
  {
    image: "/work/ee2.png",
    category: ["React", "Express", "NodeJS", "Flask", "MongoDB"],
    name: "ExamEase",
    description:
      "An automated exam evaluation and proctoring system that can be used to take and manage online exams efficiently",
    link: "https://exam-ease-six.vercel.app",
    github: "https://bitbucket.org/my-university-projects/cse327-exam-ease/src/sarwar/",
  },
  {
    image: "/work/PWS.png",
    category: ["PHP", "MySQL", "AJAX", "jQuery", "BootStrap"],
    name: "PWS ",
    description:
      "Prescription Generation Software",
    link: "https://pws.free.nf",
    github: "https://github.com/sarwar76200/PWS/",
  },
  {
    image: "/work/anti1.jpeg",
    category: ["Pandas", "scikit-learn", "Seaborn", "React"],
    name: "AntiPhish",
    description:
      "Phishing Website Detection Tool",
    link: "https://github.com/sarwar76200/AntiPhish",
    github: "https://github.com/sarwar76200/AntiPhish",
  },
  {
    image: "/work/bondhubot.jpg",
    category: ["PyTorch", "NumPy", "NLP", "React", "tRPC"],
    name: "BondhuBot",
    description:
      "Depression Analyzing Chatbot",
    link: "https://bondhubot.netlify.app",
    github: "https://github.com/withtahmid/cse499/",
  },
  {
    image: "/work/hardware.jpg",
    category: ["Assembly", "STM32", "Embedded C"],
    name: "EVM STM32",
    description:
      "Electronic Voting Machine",
    link: "https://github.com/sarwar76200/STM32-EVM",
    github: "https://github.com/sarwar76200/STM32-EVM",
  },
  // {
  //   image: "/work/calc.png",
  //   category: ["Java", "Swing", "Gradle"],
  //   name: "GUI Calculator",
  //   description:
  //     "Desktop Calculator With Graphical UI",
  //   link: "/",
  //   github: "/",
  // },
  {
    image: "/work/29card.png",
    category: ["React", "TypeScript", "TailwindCSS"],
    name: "29 Card Game",
    description:
      "A web-based implementation of the classic 29 card game",
    link: "https://29-card-game.vercel.app",
    github: "https://github.com/sarwar76200/29-Card-Game-2.0",
  }

];

//  remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => { item.category.map((x) => x) })),
];

const Projects = () => {
  // const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return project;
  });

  return (
    <section id="projects-section" className="min-h-screen pt-12">
      <div className="pt-16 container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Projects
        </h2>
        {/* tabs  */}
        {/* <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[50px] md:w-auto">{category}
                </TabsTrigger>
              );
            })}
          </TabsList> */}
        {/* tabs content  */}
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projectData.map((project, index) => {
            return (
              <ProjectCard key={index} project={project} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
