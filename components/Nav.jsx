// link (nextjs)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "Home", id: 'home-section' },
  // { path: "/education", name: "Education", id: 'proj-section' },
  { path: "/projects", name: "Projects", id: 'proj-section' },
  { path: "/contact", name: "Contact", id: 'contact-section' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet }) => {
  const handleClick = () => {
    console.log(closeSheet)
    // closeSheet(); // Close the sheet when a link is clicked
  };

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

          }} key={index} className="hover:text-violet-500">{link.name}</button>
        );
      })}
    </nav>
  );
};

export default Nav;
