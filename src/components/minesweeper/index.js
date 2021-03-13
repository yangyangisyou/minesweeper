import { useState } from 'react';
import styled, { css } from 'styled-components';
import Area from './area';

const BoardWrapper = styled.div`
    display: grid;
    max-width: calc(${(props) => props.sizeOfBoard} * 50px);
    ${css`
        grid-template-columns: repeat(${(props) => props.sizeOfBoard}, 1fr);
        grid-template-rows: repeat(${(props) => props.sizeOfBoard}, 1fr);
    `}
`;

const initialBoard = (sizeOfBoard) => {
  let mines = [];
  for (let i = 0; i < sizeOfBoard; i++) {
    let lineOfMine = [];
    for (let j = 0; j < sizeOfBoard; j++) {
      lineOfMine.push({
        x: j,
        y: i,
        isMine: false,
        isDisplay: false,
      });
    }
    mines.push(lineOfMine);
  }
  return mines;
};

const onCloseGame = (x, y) => {
  console.log(x, y);
};

const handleMineStatus = () => {

};

const Minesweeper = ({ sizeOfBoard, numOfMines }) => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [mines, setMines] = useState(initialBoard(sizeOfBoard));
  // useEffect(() => {
  //   onStartGame(0, 0, numOfMines);
  //   console.log('mines ', mines);
  // });

  const onStartGame = (x, y) => {
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
        isMine: true,
      };
    });
    setMines(updatedMines);
    setIsGameStart(true);
    handleNumOfNeighbourMines();
    onExpandEmptyMine(x, y);
  };

  const handleNumOfNeighbourMines = () => {
    let updatedMines = [...mines];
    for (let y = 0; y < sizeOfBoard; y++) {
      for (let x = 0; x < sizeOfBoard; x++) {
        let count = 0;
        (y - 1 >= 0) && (x - 1 >= 0) && mines[y - 1][x - 1].isMine && count++;
        (y - 1 >= 0) && mines[y - 1][x].isMine && count++;
        (y - 1 >= 0) && (x + 1 < sizeOfBoard) && mines[y - 1][x + 1].isMine && count++;
        (y + 1 < sizeOfBoard) && (x - 1 >= 0) && mines[y + 1][x - 1].isMine && count++;
        (y + 1 < sizeOfBoard) && mines[y + 1][x].isMine && count++;
        (y + 1 < sizeOfBoard) && (x + 1 < sizeOfBoard) && mines[y + 1][x + 1].isMine && count++;
        (x - 1 >= 0) && mines[y][x - 1].isMine && count++;
        (x + 1 < sizeOfBoard) && mines[y][x + 1].isMine && count++;
        updatedMines[y][x] = {
          ...mines[y][x],
          numOfNeighbourMines: count,
        };
      }
    }
    setMines(updatedMines);
  };

  const onExpandEmptyMine = () => {
    // mines
  };

  return (
    <BoardWrapper sizeOfBoard={ sizeOfBoard }>
      { mines.map((lineOfMine, row) => lineOfMine.map((mine, column) => <Area key={ `${column}-${row}` } isGameStart={ isGameStart } onStartGame={ onStartGame } onCloseGame={ onCloseGame } handleMineStatus={ handleMineStatus } sizeOfBoard={ sizeOfBoard } { ...mine } />)) }
    </BoardWrapper>
  );
};

export default Minesweeper;
