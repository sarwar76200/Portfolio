import DevImg from "./DevImg";
import Image from "next/image";
import { skills } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button, Tooltip } from '@nextui-org/react';

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
    Cake,
    MapPin,
} from "lucide-react";
import { useState } from "react";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Sarowar Alam Minhaj",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+880 187411 6935",
    },
    {
        icon: <MailIcon size={20} />,
        text: "sarwar76200.com",
    },
    {
        icon: <Cake size={20} />,
        text: "Born on 7th June , 2000",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "B.Sc in Computer Science",
    },
    {
        icon: <MapPin size={20} />,
        text: "Shantinagar, Dhaka",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "K. L. Jubilee School and College",
                qualification: "SSC in Science",
                gpa: "5.00",
                years: "2015 - 2017",
            },
            {
                university: "Udayan Higher Secondary School",
                qualification: "HSC in Science",
                gpa: "4.75",
                years: "2017 - 2019",
            },
            {
                university: "North South University",
                qualification: "B.Sc in Computer Science",
                gpa: "3.11",
                years: "2020 - 2025",
            }
        ],
    },

    {
        title: "experience",
        data: [
            {
                company: "NSU Problem Solvers",
                role: "Sport Programmer",
                years: "2020 - Present",
            }
        ],
    },
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML , CSS, JavaScript ",
            },
            {
                name: "React , Next , Bootstrap",
            },
            {
                name: "Typescript ,Tailwind , Sass CSS ",
            },
            {
                name: "Redux, MUI , shadcn-UI, Prisma ",
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg",
            },
            {
                imgPath: "/about/docker.svg",
            },
            {
                imgPath: "/about/firebase.svg",
            },
        ],
    },
];

const tabs = ["Personal", "Qualifications", "Skills"]

const About = () => {
    const [selected, setSelected] = useState('Personal');
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    //  console.log(getData(qualificationData , 'experience'))
    return (
        <section className="xl:h-[840px] pb-12 pt-1 xl:py-24 ">


            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
                    About me
                </h2>
                <div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-x-32 mb-16">
                        {tabs.map((tab, index) =>
                            <div key={index} className={`transition w-auto rounded-3xl flex items-center justify-center ${selected === tab ? "bg-primary" : "duration-300"}`}>
                                <p onClick={() => setSelected(tab)} className={`${tab === selected ? 'text-white' : ''} cursor-pointer transition duration-300 text-lg px-6 py-2 uppercase font-semibold text-primary tracking-[4px]`}>{tab}</p>
                            </div>
                        )}
                    </div>


                    <div style={{ "--delay": 0.05 + "s" }} className={`${selected === 'Personal' ? '' : 'hidden'} animate-slideIn opacity-0 text-xl my-2 transition duration-300 mb-16 flex items-center justify-center`}>
                        <div className="mb-16 flex items-center justify-center">
                            <div className="text-center xl:text-left">
                                {/* <h3 className="h3 mb-4">
                                    Me, At A Glance
                                </h3> */}
                                {/* icons  */}
                                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                    {infoData.map((item, index) => {
                                        return (
                                            <div
                                                className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                key={index}
                                            >
                                                <div className="text-primary ">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* languages  */}
                                {/* <div className="flex  flex-col gap-y-2">
                                    <div className="text-primary">Languages Skill</div>
                                    <div className="">
                                        Bangla, English
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>


                    <div style={{ "--delay": 0.05 + "s" }} className={`${selected === 'Qualifications' ? '' : 'hidden'} animate-slideIn opacity-0 text-xl my-2 transition duration-300 mb-16 flex items-center justify-center`}>
                        <div>
                            {/* <h3 className="h3 mb-8 text-center xl:text-left">
                                My Journey So Far
                            </h3> */}
                            {/* experience and education wrapper  */}
                            <div className="grid md:grid-cols-2 gap-y-8">
                                {/* experience  */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                        <Briefcase />
                                        <h4 className="capitalize font-medium">
                                            {getData(qualificationData, "experience").title}
                                        </h4>
                                    </div>
                                    {/* list  */}
                                    <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData, "experience").data.map(
                                            (item, index) => {
                                                const { company, role, years } = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className=" font-semibold text-xl leading-none">
                                                                {company}
                                                            </div>
                                                            <div className="text-base font-medium mb-2">
                                                                {years}
                                                            </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                {role}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                {/* education  */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                        <GraduationCap size={28} />
                                        <h4 className="capitalize font-medium">
                                            {getData(qualificationData, "education").title}
                                        </h4>
                                    </div>
                                    {/* list  */}
                                    <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData, "education").data.map(
                                            (item, index) => {
                                                const { university, qualification, gpa, years } = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className=" font-semibold text-xl leading-none">
                                                                {university}
                                                            </div>
                                                            <div className="text-base font-medium mb-2 ">
                                                                {years}
                                                            </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">
                                                                {qualification}
                                                            </div>
                                                            <div className="text-lg leading-none text-muted-foreground">
                                                                GPA: {gpa} out of {Math.ceil(parseFloat(gpa))}.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ "--delay": 0.05 + "s" }} className={`${selected === 'Skills' ? '' : 'hidden'} animate-slideIn opacity-0 text-xl my-2 transition duration-300 mb-16 flex items-center justify-center`}>
                        <div className="text-center xl:text-left max-w-3xl">
                            <h3 className="h3 mb-7">Technical Skills</h3>
                            {/* skills  */}
                            <div className="mb-16">
                                {/* <div className="border-b border-border mb-4"></div> */}
                                {/* Skill List  */}
                                <div className="mt-10 flex flex-wrap sm:gap-4 gap-4 justify-center items-center">

                                    {skills.map((skills) => (
                                        <div className="block-container w-20 h-20" key={skills.name}>
                                            <div className="rounded-xl " />
                                            <Tooltip content={skills.name} className='border border-primary bg-transparent text-primary rounded-md'>
                                                <Button className="border backdrop-blur-2xl dark:bg-zinc-800/10 dark:border-neutral-800/60 rounded-xl flex justify-center items-center h-20 w-20" >
                                                    <Image
                                                        src={skills.imageUrl}
                                                        alt={skills.name}
                                                        className="w-2/3 h-2/3 object-contain"
                                                    // className="w-16 h-16 object-contain"
                                                    />
                                                </Button>
                                            </Tooltip>

                                        </div>

                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
