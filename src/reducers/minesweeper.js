const initState = {
  mines: [[]],
  sizeOfBoard: 0,
  numOfMines: 0,
};

const minesweeperReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INITIAL_BOARD': {
      const { sizeOfBoard, numOfMines } = action.payload;
      let updatedMines = [];
      for (let i = 0; i < sizeOfBoard; i++) {
        let lineOfMine = [];
        for (let j = 0; j < sizeOfBoard; j++) {
          lineOfMine.push({
            x: j,
            y: i,
            isBomb: false,
            isVisible: false,
          });
        }
        updatedMines.push(lineOfMine);
      }
      return {
        ...state,
        mines: updatedMines,
        sizeOfBoard: sizeOfBoard,
        numOfMines: numOfMines,
      };
    }
    case 'INITIAL_MINES': {
      const { x, y } = action.payload;
      const { sizeOfBoard, numOfMines, mines } = state;
      let minePool = [];
      while (minePool.length < numOfMines) {
        const xOfMine = Math.floor(Math.random() * sizeOfBoard);
        const yOfMine = Math.floor(Math.random() * sizeOfBoard);
        if (xOfMine !== x && yOfMine !== y && !minePool.find((coord) => coord.x === xOfMine && coord.y === yOfMine)) {
          minePool.push({ x: xOfMine, y: yOfMine });
        }
      }
      let updatedMines = [...mines];
      minePool.forEach((mine) => {
        updatedMines[mine.y][mine.x] = {
          ...updatedMines[mine.y][mine.x],
          isBomb: true,
        };
      });
      return {
        ...state,
        mines: updatedMines,
      };
    }
    case 'EXPAND_VISIBLE_MINES': {
      const { x, y } = action.payload;
      const { mines, sizeOfBoard } = state;
      let updatedMines = [...mines];
      const dx = [1, -1, 0, 0];
      const dy = [0, 0, 1, -1];
      let queue = [[y, x]];
      while (queue.length > 0) {
        let [yOfQueue, xOfQueue] = queue.shift();
        const isNotOutOfBound = (xOfQueue >= 0 && xOfQueue < sizeOfBoard && yOfQueue >= 0 && yOfQueue < sizeOfBoard);
        if (isNotOutOfBound) {
          const isEmptyMine = !(updatedMines[yOfQueue][xOfQueue].numOfNeighbourMines > 0) && !(updatedMines[yOfQueue][xOfQueue].isVisible);
          if (isEmptyMine) {
            for (let k = 0; k < dx.length; k++) {
              queue.push([yOfQueue + dy[k], xOfQueue + dx[k]]);
            }
          }
          updatedMines[yOfQueue][xOfQueue].isVisible = true;
        }
      }
      return {
        ...state,
        mines: updatedMines,
      };
    }
    case 'COUNT_NEIGHBOUR_MINES': {
      const { sizeOfBoard, mines } = state;
      let updatedMines = [...mines];
      for (let y = 0; y < sizeOfBoard; y++) {
        for (let x = 0; x < sizeOfBoard; x++) {
          let count = 0;
          (y - 1 >= 0) && (x - 1 >= 0) && mines[y - 1][x - 1].isBomb && count++;
          (y - 1 >= 0) && mines[y - 1][x].isBomb && count++;
          (y - 1 >= 0) && (x + 1 < sizeOfBoard) && mines[y - 1][x + 1].isBomb && count++;
          (y + 1 < sizeOfBoard) && (x - 1 >= 0) && mines[y + 1][x - 1].isBomb && count++;
          (y + 1 < sizeOfBoard) && mines[y + 1][x].isBomb && count++;
          (y + 1 < sizeOfBoard) && (x + 1 < sizeOfBoard) && mines[y + 1][x + 1].isBomb && count++;
          (x - 1 >= 0) && mines[y][x - 1].isBomb && count++;
          (x + 1 < sizeOfBoard) && mines[y][x + 1].isBomb && count++;
          updatedMines[y][x] = {
            ...mines[y][x],
            numOfNeighbourMines: count,
          };
        }
      }
      return {
        ...state,
        mines: updatedMines,
      };
    }
    case 'CLOSE_GAME': {
      const { x, y } = action.payload;
      const { mines } = state;
      let updatedMines = [...mines];
      updatedMines[y][x] = {
        ...updatedMines[y][x],
        isVisible: true,
      };
      return {
        ...state,
        mines: updatedMines,
      };
    }
    case 'FLAGGED_MINE': {
      const { x, y, isFlag } = action.payload;
      const { mines } = state;
      let updatedMines = [...mines];
      updatedMines[y][x] = {
        ...updatedMines[y][x],
        isFlag: !isFlag,
      };
      return {
        ...state,
        mines: updatedMines,
      };
    }
    default: {
      return state;
    }
  }
};

export default minesweeperReducer;
