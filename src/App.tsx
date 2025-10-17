import clsx from "clsx";
import HeaderMobile from "./components/HeaderMobile";
import bookmark from "/icon-bookmark.svg";
import masterLogo from "/logo-mastercraft.svg";
import RewardCard from "./components/RewardCard";
import HeaderPc from "./components/HeaderPc";
import { useState } from "react";
import { data } from "./rewards";
import { fundData } from "./fund";
import type { Reward } from "./rewards";
import type { Fund } from "./fund";
import DonationComponent from "./components/DonationComponent";

type styleProps = {
  width: string;
};

export default function App() {
  //STATES
  const [fundRaiser, setFundRaiser] = useState<Fund>(fundData);
  const [rewards, setRewards] = useState<Reward[]>(data);
  const [showBar, setShowBar] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [donationMenu, setDonationMenu] = useState<boolean>(false);

  //DERIVED STATES
  const displaymaxFund: string = numberDisplay(fundRaiser.goal);
  const displayedFundNow: string = numberDisplay(fundRaiser.funded);
  const displayedBackers: string = numberDisplay(fundRaiser.backers);
  const barProgress: number = (fundRaiser.funded / fundRaiser.goal) * 100;
  const style: styleProps = { width: `${barProgress}%` };

  //HTML Components
  const rewardsComp = rewards.map((item: Reward) =>
    item.id > 0 ? <RewardCard key={item.id} rewardInfo={item} /> : null,
  );

  //FUNCTIONS

  function numberDisplay(num: number): string {
    const numberLength: number = num.toFixed(0).split("").length;

    if (numberLength === 6) {
      return handleNumber(num, 3);
    }

    if (numberLength === 5) {
      return handleNumber(num, 2);
    }

    return handleNumber(num, 1);
  }

  function handleNumber(num: number, size: number): string {
    const number: string[] = num.toFixed(0).split("");
    const firstPart: string = number.slice(0, size).join("");
    const secondPart: string = number.slice(size).join("");

    return firstPart + "," + secondPart;
  }

  return (
    <main className="relative pb-10">
      <DonationComponent
        stateMenu={donationMenu}
        handleMenu={() => {
          setDonationMenu(false);
        }}
        rewards={rewards}
      />
      <div
        className={clsx(
          `${openMenu || donationMenu ? "absolute" : "hidden"} z-1 h-full w-full bg-black opacity-30`,
        )}
      ></div>
      {/* HEADERS */}
      <HeaderPc />
      <HeaderMobile
        menuState={openMenu}
        handleMenu={() => {
          setOpenMenu((pS: boolean): boolean => !pS);
        }}
      />
      {/* ----- */}
      <section className="relative">
        <div className="mx-auto flex max-w-[850px] flex-col gap-8 px-5">
          <div className="relative -mt-10 grid gap-5 rounded-xl bg-white px-6 pt-15 pb-8 text-center shadow-[0px_0px_1px_0px_gray] xl:px-12">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
              <img src={masterLogo} alt="" />
            </div>
            <h1 className="text-xl leading-6 font-bold xl:text-2xl">
              <span>Mastercraft Bamboo </span>
              <span className="block xl:inline">Monitor Riser</span>
            </h1>
            <p className="text-my-gray-500 text-xs leading-6 xl:text-[0.9rem]">
              A beautifully handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="xl:mt-5">
              <div className="mx-auto flex max-w-[30rem] justify-between gap-3 xl:mx-0 xl:w-full xl:max-w-none">
                <button
                  onClick={() => {
                    setDonationMenu(true);
                  }}
                  className="bg-my-green-400 hover:bg-my-green-700 basis-3/4 cursor-pointer rounded-[10rem] p-4 font-bold text-white xl:max-w-[40%]"
                >
                  Back this project
                </button>
                {/* TWO BUTTONS */}
                <button
                  className="rounded-[50%] xl:hidden"
                  onClick={() => {
                    setFundRaiser(
                      (pS: Fund): Fund => ({
                        ...pS,
                        bookmarked: !pS.bookmarked,
                      }),
                    );
                  }}
                >
                  <svg width="56" height="56">
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        fill={`${fundRaiser.bookmarked ? "hsl(176, 72%, 28%)" : "hsl(0, 0%, 10%)"}`}
                        cx="28"
                        cy="28"
                        r="28"
                      ></circle>
                      <path
                        fill="hsl(0, 0%, 100%)"
                        d="M23 19v18l5-5.058L33 37V19z"
                      ></path>
                    </g>
                  </svg>
                </button>

                <button
                  className={clsx(
                    `${fundRaiser.bookmarked ? "text-my-green-700" : "text-my-gray-500"} bg-my-gray-100 hidden cursor-pointer items-center rounded-4xl font-bold hover:opacity-80 xl:flex`,
                  )}
                  onClick={() => {
                    setFundRaiser(
                      (pS: Fund): Fund => ({
                        ...pS,
                        bookmarked: !pS.bookmarked,
                      }),
                    );
                  }}
                >
                  <svg width="56" height="56">
                    <g fill="none" fill-rule="evenodd">
                      <circle
                        fill={`${fundRaiser.bookmarked ? "hsl(176, 72%, 28%)" : "hsl(0, 0%, 10%)"}`}
                        cx="28"
                        cy="28"
                        r="28"
                      ></circle>
                      <path
                        fill="hsl(0, 0%, 100%)"
                        d="M23 19v18l5-5.058L33 37V19z"
                      ></path>
                    </g>
                  </svg>
                  <span className="p-4 px-6">
                    {fundRaiser.bookmarked ? "Bookmarked" : "Bookmark"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 py-10 text-center shadow-[0px_0px_1px_0px_gray] xl:px-12 xl:text-left">
            <div className="grid gap-5 xl:flex xl:justify-between xl:gap-2">
              <div>
                <h2>
                  <span className="mb-2 block text-3xl font-bold">
                    ${displayedFundNow}
                  </span>{" "}
                  <span className="text-my-gray-500">
                    of ${displaymaxFund} backed
                  </span>
                </h2>
              </div>
              <div className="flex justify-center">
                <div className="bg-my-gray-500 w-[30%] border-b opacity-30 xl:border"></div>
              </div>
              <div>
                <h2>
                  <span className="mb-2 block text-3xl font-bold">
                    {displayedBackers}
                  </span>{" "}
                  <span className="text-my-gray-500">total backers</span>
                </h2>
              </div>
              <div className="flex justify-center">
                <div className="bg-my-gray-500 w-[30%] border-b opacity-30 xl:border"></div>
              </div>
              <div className="xl:text-right">
                <h2>
                  <span className="mb-2 block text-3xl font-bold">56</span>{" "}
                  <span className="text-my-gray-500">days left</span>
                </h2>
              </div>
            </div>
            {/* PROGRESS BAR */}
            <div
              className="bg-my-gray-100 relative mt-6 cursor-pointer rounded-xl"
              onMouseOver={() => {
                setShowBar(true);
              }}
              onMouseLeave={() => {
                setShowBar(false);
              }}
            >
              <div
                className={clsx(
                  `border-my-green-400 text-my-green-400 absolute top-1/2 left-1/2 -translate-1/2 rounded-3xl border-2 bg-white p-1 px-6 text-sm font-bold ${showBar ? "absolute" : "hidden"}`,
                )}
              >
                {barProgress} %
              </div>
              <div
                style={style}
                className="bg-my-green-400 rounded-xl p-2"
              ></div>
            </div>
          </div>
          <div className="rounded-xl bg-white px-6 py-8 text-left shadow-[0px_0px_1px_0px_gray] xl:px-12">
            <h3 className="mb-6 text-xl font-bold xl:text-2xl">
              About this project
            </h3>
            <div className="mb-10 grid gap-5">
              <p className="text-my-gray-500 xl:text-md text-base xl:leading-7">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </p>
              <p className="text-my-gray-500 text-sm xl:text-base xl:leading-7">
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </p>
            </div>
            <div className="grid gap-7">{rewardsComp}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
