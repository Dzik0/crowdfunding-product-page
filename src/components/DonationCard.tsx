import { useState } from "react";
import type { Reward } from "../rewards";
import clsx from "clsx";

type DonationCardProps = {
  info: Reward;
  handleActivePledge: () => void;
  addDonation: (num: string, id: number) => void;
  setRef: (id: number, el: HTMLDivElement | null) => void;
  closeDonationMenu: () => void;
};

export default function DonationCard({
  info,
  handleActivePledge,
  addDonation,
  setRef,
  closeDonationMenu,
}: DonationCardProps) {
  const [amount, setAmount] = useState<string>("");

  const error: boolean = amount !== "" && Number(amount) < info.price;
  const emptyInput: boolean = amount === "";

  const errorMsg = error ? (
    <div className="mt-2 text-center text-sm text-red-500">
      Pledge amount must be greater than ${info.price}
    </div>
  ) : (
    ""
  );

  function handleSubmit() {
    if (Number(amount) < info.price) {
      alert("WRONG NUMBER");
      return;
    }
    addDonation(amount, info.id);
  }

  function handleClick() {
    if (info.left === 0) {
      return;
    }

    handleActivePledge();
  }

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
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder={info.price.toString()}
              value={amount}
              className="w-1/2 text-center font-bold outline-0"
            />
          </div>
          <button
            disabled={error || emptyInput ? true : false}
            onClick={() => {
              handleSubmit();
              closeDonationMenu();
            }}
            className={clsx(
              `basis-1/2 rounded-3xl p-2 text-white ${error || emptyInput ? "bg-gray-300 hover:bg-gray-300" : "hover:bg-my-green-700 bg-my-green-400"}`,
            )}
          >
            Continue
          </button>
        </div>
      </div>
      {errorMsg}
    </div>
  ) : (
    ""
  );
  return (
    <div
      ref={(el) => {
        setRef(info.id, el);
      }}
      onClick={handleClick}
      className={clsx(
        `grid gap-5 rounded-xl ${info.active ? "border-my-green-400 border-2" : "border border-gray-200"} cursor-pointer p-4`,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-[50%] border border-gray-400">
          {info.active ? (
            <span className="bg-my-green-400 h-3 w-3 rounded-[50%]"></span>
          ) : (
            ""
          )}
        </div>
        <div className="text-left">
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
      <p className="text-my-gray-500 text-left text-sm">{info.info}</p>
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
