export default function RewardCard() {
  return (
    <div className="grid gap-5 rounded-xl border border-gray-300 p-5">
      <div className="grid gap-1">
        <h4 className="font-bold">Bamboo Stand</h4>
        <p className="text-my-green-400">Pledge $25 or more</p>
      </div>
      <p className="text-my-gray-500 text-sm font-light">
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you'll be added to a special Backer
        member list.
      </p>
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold">101</div>
        <div className="text-my-gray-500">left</div>
      </div>
      <div>
        <button className="bg-my-green-400 w-[75%] rounded-[10rem] p-4 text-sm font-bold text-white">
          Select Reward
        </button>
      </div>
    </div>
  );
}

//Need props with object and if 0 we go opacity --- and change the button name to out of stock
