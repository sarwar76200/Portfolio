import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <SheetClose asChild>
              <div>
                <Nav
                  containerStyles="flex flex-col items-center gap-y-6"
                  linkStyles="text-2xl"
                />
              </div>

            </SheetClose>
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl hover:text-primary dark:hover:text-primary transition-all" />
        </div>
      </SheetContent>

    </Sheet>
  );
};

export default MobileNav;
