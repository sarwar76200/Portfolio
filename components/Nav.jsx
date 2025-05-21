// link (nextjs)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";
import { useEffect } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";
const links = [
  { path: "/", name: "Home", id: 'home-section' },
  { path: "/", name: "Accomplishments", id: 'accomplishments-section' },
  { path: "/projects", name: "Projects", id: 'proj-section' },
  { path: "/contact", name: "Contact", id: 'contact-section' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet }) => {
  const handleClick = () => {
    console.log(closeSheet)
    // closeSheet(); // Close the sheet when a link is clicked
  };

  const completion = useScrollProgress();


  const getSection = () => {
    if (completion >= 82) return 'contact';
    if (completion >= 55) return 'projects';
    if (completion >= 40) return 'accomplishments';
    return 'home';
  }


  useEffect(() => {
    // console.log('lllllllllllllll')
    console.log(completion)
  }, [completion]);

  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          // <Link onClick={handleClick}
          //   href={link.path}
          //   key={index}
          //   className={`capitalize ${linkStyles}`}
          // >
          //   {link.path === path && (
          //     <motion.span
          //       initial={{ y: "-100%" }}
          //       animate={{ y: 0 }}
          //       transition={{ type: "tween" }}
          //       layoutId="underline"
          //       className={`${underlineStyles}`}
          //     />
          //   )}
          //   {link.name}
          // </Link>
          <button onClick={() => {
            const elem = document.getElementById(link.id);
            elem?.scrollIntoView({
              behavior: 'smooth'
            })
            if (link.id === 'home-section') {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });

              handleClick();


            }
            // elem.style.marginTop = '100px'
            // elem.style.transitionDuration = "2s";

          }} key={index} className={`${getSection().toLowerCase() === link.name.toLowerCase() ? `xl:text-primary` : 'xl:text-tertiary'} text-tertiary hover:text-secondary `}>{link.name}


          </button>
        );
      })}
    </nav>
  );
};

export default Nav;
