import { GameSymbol } from './GameSymbol';
import style from '../../style/game.module.css';

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button className={`${style['cell']} ${isWinner ? style['cell--win'] : ''}`} onClick={onClick}>
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
