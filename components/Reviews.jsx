"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/trophy.svg",
    name: "1st Runner Up",
    job: "Intra NSU Programming Contest 2023",
    review:
      "Became 1st Runner up competing with 100 participants in Intra NSU Programming Contest in Summer 2023",
  },
  {
    avatar: "/reviews/icpc.png",
    name: "Asia West Finalist",
    job: "ICPC 2023",
    review:
      "Was qualified for ICPC Asia West Continent Finals in 2023 as a part of team NSU_DDC",
  },
  {
    avatar: "/reviews/trophy.svg",
    name: "Ranked 27th",
    job: "CoU-BRACNet IUPC 2023",
    review:
      "Became the first to solve Problem A and ranked 27th in CoU-BRACNet IUPC 2023 as a part of team NSU_3-UNSAT",
  },
  {
    avatar: "/reviews/meta.png",
    name: "Ranked 1636th",
    job: "Meta Hacker Cup 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: " Evelyn Anderson",
    job: "interior designer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: " Evelyn Anderson",
    job: "interior designer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Accomplishments</h2>
        {/* slider  */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image  */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name  */}
                      <div className="flex flex-col">
                        <CardTitle className="pt-1">{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
