import type { Reward } from "../rewards";
import clsx from "clsx";

type RewardCardProps = {
  rewardInfo: Reward;
};

export default function RewardCard({ rewardInfo }: RewardCardProps) {
  return (
    <div className="grid gap-5 rounded-xl border border-gray-300 p-5 xl:p-8">
      <div className="flex flex-col gap-1 md:flex-row md:justify-between">
        <h4 className="font-bold xl:text-xl">{rewardInfo.title}</h4>
        <p className="text-my-green-400">Pledge ${rewardInfo.price} or more</p>
      </div>
      <p className="text-my-gray-500 text-sm font-light xl:text-base xl:leading-8">
        {rewardInfo.info}
      </p>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold">{rewardInfo.left}</div>
          <div className="text-my-gray-500">left</div>
        </div>
        <div className="">
          <button
            className={clsx(
              `${rewardInfo.left === 0 ? "bg-my-gray-500 opacity-30" : "bg-my-green-400"} w-[75%] rounded-[10rem] p-4 text-sm font-bold text-white md:w-[10rem] xl:w-[12rem]`,
            )}
          >
            {rewardInfo.left === 0 ? "Out of stock" : "Select Reward"}
          </button>
        </div>
      </div>
    </div>
  );
}

//Need props with object and if 0 we go opacity --- and change the button name to out of stock
