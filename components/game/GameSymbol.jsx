import { SYMBOL_O, SYMBOL_X } from './constants';
import style from '../../style/game.module.css';

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return style['symbol--o'];
    if (symbol === SYMBOL_X) return style['symbol--x'];
    return '';
  };
  return <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>;
}
