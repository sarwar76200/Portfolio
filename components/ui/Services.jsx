import { Wand2, MonitorSmartphone, Smartphone, Zap, Network } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const servicesData = [
  {
    icon: <Network size={72} strokeWidth={0.8} />,

    title: "Data Structure and Algorithms",
    description:
      "I am very proficient in Data Structure and Algorithms",
  },
  {
    icon: <Zap size={72} strokeWidth={0.8} />,
    title: "Problem Solving",
    description:
      "I can break down complex problems and solve them effciently",
  },
  {
    icon: <MonitorSmartphone className="  " size={72} strokeWidth={0.8} />,
    title: "Full Stack App Development",
    description:
      "I can develop full-stack web applications, using clean code and latest frameworks",
  },
  // {
  //   icon: <MonitorSmartphone className="  " size={72} strokeWidth={0.8} />,
  //   title: "Full Stack App Development",
  //   description:
  //     "I can develop full-stack web applications, using clean code and latest frameworks",
  // },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Expertise
        </h2>
        {/* grid items  */}
        {/* <div className="grid xl:grid-cols-4 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8"> */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-16">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="border-primary/30 w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-18 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[90px] bg-background dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
