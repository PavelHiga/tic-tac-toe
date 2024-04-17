import Image from "next/image";
import logoSrc from "../../assets/icons/logo.svg";
import { Profile } from "../profile/Profile";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";

export const Header = () => {
  return (
    <header className="flex items-center h-24 px-8 bg-white shadow-md">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 mx-6 bg-slate-200 " />
      <button className="w-44 bg-teal-600 py-2 rounded-lg text-white hover:bg-teal-500 transition-colors text-2xl leading-tight">
        Играть
      </button>
      <button className="flex ml-auto items-center gap-x-2 text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
