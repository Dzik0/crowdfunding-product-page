import check from "/icon-check.svg";
import clsx from "clsx";

type DoneMessageProps = {
  donated: boolean;
  closeWindow: () => void;
  donateMsgRef: React.RefObject<HTMLDivElement | null>;
};

export default function DoneMessage({
  donated,
  closeWindow,
  donateMsgRef,
}: DoneMessageProps) {
  return (
    <div
      ref={donateMsgRef}
      className={clsx(
        `${donated ? "absolute" : "hidden"} right-5 left-5 z-5 h-dvh`,
      )}
    >
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-5 rounded-xl bg-white p-8">
          <div>
            <img src={check} alt="" />
          </div>
          <h2 className="text-xl font-bold">Thanks for the support!</h2>
          <p className="text-my-gray-500 text-center leading-7">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed
          </p>
          <button
            onClick={closeWindow}
            className="bg-my-green-400 mt-4 rounded-4xl p-4 px-10 font-bold text-white"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
