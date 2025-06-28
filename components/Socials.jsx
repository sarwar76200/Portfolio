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
    label: "Facebook profile"
  },
  {
    path: "https://github.com/sarwar76200",
    name: <SiGithub />,
    label: "Github profile"
  },
  {
    path: "https://www.linkedin.com/in/sarwar76200",
    name: <SiLinkedin />,
    label: "LinkedIn profile"
  },
  {
    path: "https://codeforces.com/profile/sarwar__",
    name: <SiCodeforces />,
    label: "CodeForces handle"
  },
  {
    path: "mailto:sarwar76200@gmail.com",
    name: <SiGmail />,
    label: "Email address"
  },
  {
    path: "tel:008801874116935",
    name: <ImPhone />,
    label: "Phone number"
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link aria-label={icon.label} href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
