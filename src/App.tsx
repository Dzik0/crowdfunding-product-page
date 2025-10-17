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

type styleProps = {
  width: string;
};

export default function App() {
  //STATES
  const [fundRaiser, setFundRaiser] = useState<Fund>(fundData);
  const [rewards, setRewards] = useState<Reward[]>(data);

  //DERIVED STATES
  const displaymaxFund: string = numberDisplay(fundRaiser.goal);
  const displayedFundNow: string = numberDisplay(fundRaiser.funded);
  const displayedBackers: string = numberDisplay(fundRaiser.backers);
  const barProgress: number = (fundRaiser.funded / fundRaiser.goal) * 100;
  const style: styleProps = { width: `${barProgress}%` };

  //HTML Components
  const rewardsComp = rewards.map((item: Reward) => (
    <RewardCard key={item.id} rewardInfo={item} />
  ));

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
    <main className="pb-10">
      {/* HEADERS */}
      <HeaderPc />
      <HeaderMobile />
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
                <button className="bg-my-green-400 basis-3/4 rounded-[10rem] p-4 font-bold text-white xl:max-w-[40%]">
                  Back to this project
                </button>
                {/* TWO BUTTONS */}
                <button className="flex basis-1/4 justify-center rounded-[50%] border xl:hidden">
                  <img src={bookmark} alt="" />
                </button>
                <div className="text-my-gray-500 bg-my-gray-100 hidden items-center justify-between gap-3 rounded-4xl font-bold xl:flex">
                  <button className="rounded-[50%]">
                    <img src={bookmark} alt="" />
                  </button>
                  <p className="pr-5">Bookmark</p>
                </div>
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
            <div className="bg-my-gray-100 mt-6 rounded-xl">
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
