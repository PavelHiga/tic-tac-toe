import { GameCell } from "./GameCell";
import { GameInfo } from "./GameInfo";
import { useGameState } from "./use-game-state";

export function Game() {
  const {
    cells,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDraw,
    currentStep,
    winnerSequence,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-44 mx-auto my-24 p-5 border-black border">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid grid-cols-game-field grid-rows-game-field pt-px pl-px">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button
        className="mt-3 py-1 px-3 rounded bg-transparent border border-gray-300  cursor-pointer"
        onClick={handleResetClick}
      >
        Сбросить
      </button>
    </div>
  );
}
