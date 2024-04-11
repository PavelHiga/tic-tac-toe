import style from '../../style/game.module.css';
import { GameCell } from './GameCell';
import { GameInfo } from './GameInfo';
import { useGameState } from './use-game-state';

export function Game() {
  const { cells, handleCellClick, handleResetClick, winnerSymbol, isDraw, currentStep, winnerSequence } =
    useGameState();

  return (
    <div className={style['game']}>
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
      <div className={style['game-field']}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button className={style['reset']} onClick={handleResetClick}>
        Сбросить
      </button>
    </div>
  );
}
