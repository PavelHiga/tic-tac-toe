import clsx from "clsx";
import { GameSymbol } from "./GameSymbol";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "flex justify-center bg-transparent items-center border border-gray-400 -mt-px -ml-px",
        isWinner && "bg-red-200",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
