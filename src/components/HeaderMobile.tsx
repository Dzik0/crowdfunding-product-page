import logo from "/logo.svg";
import burger from "/icon-hamburger.svg";

export default function HeaderMobile() {
  return (
    <header className="absolute w-full">
      <div className="flex justify-between p-5">
        <div>
          <img src={logo} alt="Company logo" />
        </div>
        <div>
          <img src={burger} alt="Burger menu icon" />
        </div>
      </div>
    </header>
  );
}
