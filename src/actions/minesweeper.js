export const initialBoard = (sizeOfBoard, numOfMines) => (
  {
    type: 'INITIAL_BOARD',
    payload: {
      sizeOfBoard,
      numOfMines,
    }
  }
);

export const initialMines = (x, y) => (
  {
    type: 'INITIAL_MINES',
    payload: {
      x, y
    }
  }
);

export const countNumOfNeighbourMines = () => (
  {
    type: 'COUNT_NEIGHBOUR_MINES',
  }
);

export const onExpandVisibleMine = (x, y) => (
  {
    type: 'EXPAND_VISIBLE_MINES',
    payload: {
      x, y
    }
  }
);

export const onFlaggedMine = (x, y, isFlag) => (
  {
    type: 'FLAGGED_MINE',
    payload: {
      x, y, isFlag
    }
  }
);

export const onCloseGame = (x, y) => (
  {
    type: 'CLOSE_GAME',
    payload: {
      x, y
    }
  }
);
