import logo from "/logo.svg";
import burger from "/icon-hamburger.svg";
import closeIcon from "/icon-close-menu.svg";
import hero from "/image-hero-mobile.jpg";
import clsx from "clsx";
import { motion } from "framer-motion";

type HeaderMobileProps = {
  menuState: boolean;
  handleMenu: () => void;
};

export default function HeaderMobile({
  menuState,
  handleMenu,
}: HeaderMobileProps) {
  return (
    <header className="relative block xl:hidden">
      {menuState && (
        <div className={clsx(`absolute top-0 right-0 left-0 z-3`)}>
          <div className="flex justify-between p-5">
            <div>
              <img src={logo} alt="Company logo" />
            </div>
            <motion.button
              onClick={handleMenu}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <img src={closeIcon} alt="Burger menu icon" />
            </motion.button>
          </div>
          <motion.div
            className="mx-5 rounded-2xl bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ul>
              <li className="border-b border-b-gray-200 p-4 py-5 font-bold">
                About
              </li>
              <li className="border-b border-b-gray-200 p-4 py-5 font-bold">
                Discover
              </li>
              <li className="p-4 py-5 font-bold">Get Started</li>
            </ul>
          </motion.div>
        </div>
      )}
      <div className={clsx(`${menuState ? "hidden" : "absolute"} w-full`)}>
        <div className="flex justify-between p-5">
          <div>
            <img src={logo} alt="Company logo" />
          </div>
          <motion.button
            className="cursor-pointer"
            onClick={handleMenu}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img src={burger} alt="Burger menu icon" />
          </motion.button>
        </div>
      </div>
      <img src={hero} alt="" className="max-h-[350px] w-full object-cover" />
    </header>
  );
}
