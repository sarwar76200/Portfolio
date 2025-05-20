"use client";

import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiYoutubeFill,
  RiFacebookBoxFill
} from "react-icons/ri";

import { SiCodeforces } from "react-icons/si";

import Link from "next/link";

// icons for the current user and the current user's profile

const icons = [
  {
    path: "https://www.facebook.com/alam.sa.007/",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://github.com/sarwar76200",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/realpremvarma",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://codeforces.com/profile/sarwar__",
    name: <SiCodeforces />,
  },
  {
    path: "https://www.linkedin.com/in/sarwar76200",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
