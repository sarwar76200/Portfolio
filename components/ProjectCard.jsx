import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { useRouter } from 'next/navigation';
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";



const randomColor = () => {
  const colors = ["blue", "red", "green", "yellow", "indigo", "purple", "pink"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  if (color === 'blue') {
    return `bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300`
  }
  if (color === 'red') {
    return `bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300`
  }
  if (color === 'green') {
    return `bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300`
  }
  if (color === 'yellow') {
    return `bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300`
  }
  if (color === 'indigo') {
    return `bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300`
  }
  if (color === 'purple') {
    return `bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300`
  }
  return `bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300`
}

const ProjectCard = ({ project }) => {
  const router = useRouter();


  // Create onClick handler for whole card
  // const handleCardClick = () => {
  //   router.push(`/projectdetails/${project.id}`); // Use ID for unique routing
  // };

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image  */}
        <div className="relative w-full xl:h-[300px] h-[200px] flex  items-center justify-center bg-tertiary dark:bg-accent/10 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={400}
            height={200}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            <Link
              target="_blank"
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              target="_blank"
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg mb-2">{project.description}</p>
        <div className="flex flex-wrap flex-row gap-2">
          {project && project['category'].map((category, idx) =>
            <div key={idx}>
              {/* <Badge variant="secondary" className="font-normal text-xs">
                {category}
              </Badge> */}
              <span className={`flex items-center justify-center text-xs font-normal me-2 px-2.5 py-0.5 rounded-lg ${randomColor()}`}>{category}</span>
            </div>
          )}

          {/* <Badge className="uppercase text-xs font-xs">
            {project.category}
          </Badge>
          <Badge className="uppercase text-xs font-xs">
            {project.category}
          </Badge>
          <Badge className="uppercase text-xs font-xs">
            {project.category}
          </Badge>
          <Badge className="uppercase text-xs font-xs">
            {project.category}
          </Badge> */}
        </div>
      </div>
      <div>

      </div>
    </Card>
  );
};

export default ProjectCard;
