import clsx from "clsx";
import { UiButton } from "../uikit/UiButton";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import { ZeroIcon } from "../../assets/icons/ZeroIcon";

export const GameField = ({ className }) => {
  const gameFiledStyle = clsx(
    className,
    "w-full bg-white rounded-xl shadow-md px-8 pt-5 pb-7",
  );

  const cellsArr = new Array(19 * 19).fill(null);

  return (
    <div className={gameFiledStyle}>
      <div className="flex items-center gap-3">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-slate-900 font-semibold text-xl leading-tight">
            <p>Ход:</p>
            <CrossIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
            <p>Следующий: </p>
            <ZeroIcon />
          </div>
        </div>

        <UiButton size="md" variant="primary">
          Ничья
        </UiButton>
        <UiButton size="md" variant="outline">
          Сдаться
        </UiButton>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cellsArr.map((_, index) => (
          <button
            className="flex justify-center items-center border border-slate-200 -ml-px -mt-px"
            key={index}
          ></button>
        ))}
      </div>
    </div>
  );
};
