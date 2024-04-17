import clsx from "clsx";
import { Profile } from "../profile/Profile";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import { ZeroIcon } from "../../assets/icons/ZeroIcon";

export const GameInfo = ({ className }) => {
  const style = clsx(
    className,
    "flex bg-white rounded-2xl shadow-md px-8 py-4 justify-between",
  );

  return (
    <div className={style}>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44" />
          <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md absolute -top-1 -left-1 ">
            <CrossIcon size="12px" />
          </div>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <p className="text-slate-900 text-lg font-semibold">01:08</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-orange-600 text-lg font-semibold">00:08</p>
        <div className="w-px h-6 bg-slate-200" />
        <div className="relative">
          <Profile className="w-44" />
          <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md absolute -top-1 -left-1 ">
            <ZeroIcon size="12px" />
          </div>
        </div>
      </div>
    </div>
  );
};
