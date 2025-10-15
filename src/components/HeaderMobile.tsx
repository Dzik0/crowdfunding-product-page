import logo from "/logo.svg";
import burger from "/icon-hamburger.svg";
import hero from "/image-hero-mobile.jpg";

export default function HeaderMobile() {
  return (
    <header className="relative block xl:hidden">
      <div className="absolute w-full">
        <div className="flex justify-between p-5">
          <div>
            <img src={logo} alt="Company logo" />
          </div>
          <div>
            <img src={burger} alt="Burger menu icon" />
          </div>
        </div>
      </div>
      <img src={hero} alt="" className="max-h-[350px] w-full object-cover" />
    </header>
  );
}
