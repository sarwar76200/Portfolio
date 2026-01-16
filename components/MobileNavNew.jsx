"use client";

import { useState, useEffect } from "react";
import { Award, House, Menu, PencilRuler, Phone } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Socials from "./Socials";

const MobileNavNew = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tiles = ["home", "accomplishments", "projects", "contact"];
    const icons = [<House size={50} strokeWidth={1} />, <Award size={50} strokeWidth={1} />, <PencilRuler size={50} strokeWidth={1} />, <Phone size={50} strokeWidth={1} />];

    const y = useMotionValue(0);
    const scaleY = useTransform(y, (value) => {
        // Stretch based on drag distance (max stretch 1.15x)
        return 1 + Math.min(Math.abs(value) / 500, 0.15);
    });

    useEffect(() => {
        if (isOpen) {
            y.set(0);
        }
    }, [isOpen, y]);

    const toggleMenu = () => setIsOpen(!isOpen);


    const scrollToSection = (section, delay = 300) => {
        return new Promise(resolve => {
            const elem = document.getElementById(`${section}-section`);
            elem?.scrollIntoView({
                behavior: 'smooth'
            })
            if (section === 'home') {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            }
            setTimeout(() => {
                resolve(true);
            }, delay);
        })
    }

    return (
        <>
            <button onClick={toggleMenu} className="p-2 z-40 relative text-tertiary hover:text-primary transition-colors">
                <Menu size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 dark:bg-black/10 bg-black/40 backdrop-blur-md"
                    >
                        <motion.div
                            className="w-full h-full flex items-center justify-center"
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={0.2}
                            style={{ y }}
                            onClick={toggleMenu}
                        >
                            <motion.div
                                className="flex flex-col space-y-16"
                                style={{ scaleY }}
                                onClick={(e) => e.stopPropagation()}

                            >
                                <motion.div
                                    className="grid grid-cols-2 gap-8 p-8 -mt-32"

                                >
                                    {tiles.map((tile, index) => (
                                        <button
                                            key={tile}
                                            style={{ animationDelay: `${index * 50}ms` }}
                                            className="w-36 h-36 dark:bg-white/10 bg-white/60 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center gap-3 hover:bg-white/50 dark:hover:bg-black/50 transition-all shadow-xl border border-white/20 opacity-0 animate-dropIn"
                                            onClick={async () => {
                                                await scrollToSection(tile, 300);
                                                setIsOpen(false);
                                            }
                                            }
                                        >
                                            {/* TODO: Add SVG icons here for each tile */}
                                            {icons[index]}
                                            {/* <div className="w-10 h-10 bg-white/30 rounded-full mb-1 flex items-center justify-center">
                                            <div className="w-4 h-4 bg-current opacity-50 rounded-full" />
                                        </div> */}
                                            <span className="text-base font-semibold capitalize text-foreground">
                                                {tile}
                                            </span>
                                        </button>
                                    ))}
                                </motion.div>

                                <div className="flex animate-dropIn">
                                    <Socials
                                        containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
                                        iconsStyles="text-primary text-white/70 text-[20px] hover:text-white hover:text-white/90 transition-all"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNavNew;
