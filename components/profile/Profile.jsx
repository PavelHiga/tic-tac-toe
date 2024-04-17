import clsx from "clsx";
import Image from "next/image";
import avatarSrc from "../../assets/icons/avatar.svg";

export const Profile = ({ className }) => {
  const style = clsx(
    className,
    "flex items-center gap-2 text-start text-teal-600",
  );
  return (
    <div className={style}>
      <Image src={avatarSrc} alt="user avatar" />
      <div>
        <p className="text-lg leading-tight">Paromovevg</p>
        <p className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</p>
      </div>
    </div>
  );
};
