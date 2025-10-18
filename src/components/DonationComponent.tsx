import DonationCard from "./DonationCard";
import clsx from "clsx";
import type { Reward } from "../rewards";

type DonationComponentProps = {
  handleMenu: () => void;
  stateMenu: boolean;
  rewards: Reward[];
  handleActivePledge: (id: number) => void;
};

export default function DonationComponent({
  handleMenu,
  stateMenu,
  rewards,
  handleActivePledge,
}: DonationComponentProps) {
  return (
    <div
      className={clsx(
        `${stateMenu ? "absolute" : "hidden"} top-15 right-5 left-5 z-5 grid gap-5 rounded-2xl bg-white p-5`,
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Back this project</h2>
        <button onClick={handleMenu} className="text-xl font-bold">
          X
        </button>
      </div>
      <p className="text-my-gray-500 text-sm leading-6">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="grid gap-6">
        {rewards.map((item) => (
          <DonationCard
            key={item.id}
            info={item}
            handleActivePledge={() => {
              handleActivePledge(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
