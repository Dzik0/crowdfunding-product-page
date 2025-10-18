import type { Reward } from "../rewards";
import clsx from "clsx";

type DonationCardProps = {
  info: Reward;
  handleActivePledge: () => void;
};

export default function DonationCard({
  info,
  handleActivePledge,
}: DonationCardProps) {
  const pledgeElement = info.active ? (
    <div>
      <div className="mb-5 border-b border-gray-200"></div>
      <div className="grid gap-3 text-center">
        <h3 className="text-my-gray-500">Enter your pledge</h3>
        <div className="flex gap-3">
          <div className="flex basis-1/2 items-center justify-center gap-2 rounded-3xl border border-gray-300">
            <p className="text-my-gray-500 text-sm">$</p>
            <input
              type="number"
              name={`dono-${info.id}`}
              id="dono"
              min={info.price}
              placeholder="10"
              className="w-1/2 text-center font-bold outline-0"
            />
          </div>
          <button className="bg-my-green-400 hover:bg-my-green-700 basis-1/2 rounded-3xl p-2 text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
  return (
    <div
      className={clsx(
        `grid gap-5 rounded-xl ${info.active ? "border-my-green-400 border-2" : "border border-gray-200"} p-4`,
      )}
    >
      <div className="flex items-center gap-4">
        <button
          className="flex h-6 w-6 items-center justify-center rounded-[50%] border border-gray-400"
          onClick={handleActivePledge}
        >
          {info.active ? (
            <span className="bg-my-green-400 h-3 w-3 rounded-[50%]"></span>
          ) : (
            ""
          )}
        </button>
        <div>
          <h3>{info.title}</h3>
          {info.left === 999 ? (
            ""
          ) : (
            <p className="text-my-green-400 text-sm">
              Pledge ${info.price} or more
            </p>
          )}
        </div>
      </div>
      <p className="text-my-gray-500 text-sm">{info.info}</p>
      <div className="flex gap-2">
        <p className="text-xl font-bold">
          {info.left === 999 ? "Unlimited" : info.left}
        </p>
        {info.left === 999 ? (
          ""
        ) : (
          <p className="text-my-gray-500 text-sm">left</p>
        )}
      </div>
      {pledgeElement}
    </div>
  );
}
