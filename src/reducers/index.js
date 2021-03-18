import { combineReducers } from 'redux';
import minesweeperReducer from './minesweeper';

const allReducers = combineReducers({
  minesweeper: minesweeperReducer,
});

export default allReducers;
