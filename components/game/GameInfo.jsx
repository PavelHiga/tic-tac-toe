import { GameSymbol } from './GameSymbol';
import style from '../../style/game.module.css';

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className={style['game-info']}>Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className={style['game-info']}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={style['game-info']}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
