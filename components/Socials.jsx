"use client";

import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiYoutubeFill,
  RiFacebookBoxFill
} from "react-icons/ri";

import { SiCodeforces, SiGithub, SiFacebook, SiGmail, SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import Link from "next/link";

// icons for the current user and the current user's profile

const icons = [
  {
    path: "https://www.facebook.com/alam.sa.007/",
    name: <SiFacebook />,
  },
  {
    path: "https://github.com/sarwar76200",
    name: <SiGithub />,
  },
  {
    path: "https://www.linkedin.com/in/sarwar76200",
    name: <SiLinkedin />,
  },
  {
    path: "https://codeforces.com/profile/sarwar__",
    name: <SiCodeforces />,
  },
  {
    path: "mailto:sarwar76200@gmail.com",
    name: <SiGmail />,
  },
  {
    path: "tel:+8801874116935",
    name: <ImPhone />,
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
