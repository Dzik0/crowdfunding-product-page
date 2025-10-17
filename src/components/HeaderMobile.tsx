import logo from "/logo.svg";
import burger from "/icon-hamburger.svg";
import closeIcon from "/icon-close-menu.svg";
import hero from "/image-hero-mobile.jpg";
import clsx from "clsx";

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
      <div
        className={clsx(
          `${menuState ? "absolute" : "hidden"} top-0 right-0 left-0 z-3`,
        )}
      >
        <div className="flex justify-between p-5">
          <div>
            <img src={logo} alt="Company logo" />
          </div>
          <button onClick={handleMenu}>
            <img src={closeIcon} alt="Burger menu icon" />
          </button>
        </div>
        <div className="mx-5 rounded-2xl bg-white">
          <ul>
            <li className="border-b border-b-gray-200 p-4 py-5 font-bold">
              About
            </li>
            <li className="border-b border-b-gray-200 p-4 py-5 font-bold">
              Discover
            </li>
            <li className="p-4 py-5 font-bold">Get Started</li>
          </ul>
        </div>
      </div>
      <div className={clsx(`${menuState ? "hidden" : "absolute"} w-full`)}>
        <div className="flex justify-between p-5">
          <div>
            <img src={logo} alt="Company logo" />
          </div>
          <button onClick={handleMenu}>
            <img src={burger} alt="Burger menu icon" />
          </button>
        </div>
      </div>
      <img src={hero} alt="" className="max-h-[350px] w-full object-cover" />
    </header>
  );
}
