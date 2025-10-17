import type { Reward } from "../rewards";

type DonationCardProps = {
  info: Reward;
};

export default function DonationCard({ info }: DonationCardProps) {
  return (
    <div className="grid gap-5 rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-4">
        <input type="radio" name="" id="" />
        <h3>{info.title}</h3>
      </div>
      <p className="text-my-gray-500 text-sm">{info.info}</p>
      <div className="flex gap-2">
        <p className="text-xl font-bold">{info.left}</p>
        <p className="text-my-gray-500 text-sm">left</p>
      </div>
      <div className="border-b border-gray-200"></div>
      <div className="grid gap-3 text-center">
        <h3 className="text-my-gray-500">Enter your pledge</h3>
        <div className="flex gap-3">
          <div className="flex basis-1/2 items-center justify-center gap-2 rounded-3xl border border-gray-300">
            <p className="text-my-gray-500 text-sm">$</p>
            <input
              type="number"
              name="dono"
              id="dono"
              min={1}
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
  );
}
