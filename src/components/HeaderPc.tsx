import hero from "/image-hero-desktop.jpg";
import logo from "/logo.svg";

export default function HeaderPc() {
  return (
    <header className="relative hidden xl:block">
      <div className="absolute w-full">
        <div className="flex justify-between p-10 px-32">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className="flex gap-8 text-white">
              <li>About</li>
              <li>Discover</li>
              <li>Get started</li>
            </ul>
          </div>
        </div>
      </div>
      <img src={hero} alt="" className="w-full object-cover" />
    </header>
  );
}
