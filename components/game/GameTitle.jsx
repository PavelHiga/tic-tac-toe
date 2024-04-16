import { GoBackIcon } from "../../assets/icons/GoBackIcon.jsx";
import { RatingIcon } from "../../assets/icons/RatingIcon.jsx";
import { UserIcon } from "../../assets/icons/UserIcon.jsx";
import { TimeIcon } from "../../assets/icons/TimeIcon.jsx";
import Link from "next/link";

export const GameTitle = () => {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex gap-2 items-center text-teal-600 hover:text-teal-500 -mb-0.5"
      >
        <GoBackIcon />
        <p className="text-xs">На главную</p>
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-x-3 text-slate-400 text-xs">
        <RatingIcon />
        <div className="flex gap-x-1 items-center">
          <UserIcon />
          <p>2</p>
        </div>
        <div className="flex gap-x-1 items-center">
          <TimeIcon />
          <p>1 мин на ход</p>
        </div>
      </div>
    </div>
  );
};
