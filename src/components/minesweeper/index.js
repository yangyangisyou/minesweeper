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

// const onExpandEmpty

const handleMineStatus = () => {

};

const Minesweeper = ({ sizeOfBoard, numOfMines }) => {
  const [isGameStart] = useState(false);
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
      if (xOfMine !== x && yOfMine !== y) {
        minePool.push({
          x: xOfMine,
          y: yOfMine,
        });
      }
    }
    let updatedMines = [...mines];
    minePool.forEach((mine) => {
      updatedMines[mine.y][mine.x] = {
        ...updatedMines[mine.y][mine.x],
        isMine: true,
      };
    });
    console.log('minePool ', minePool);
    console.log('updatedMines ', updatedMines);
    setMines(updatedMines);
  };

  return (
    <BoardWrapper sizeOfBoard={ sizeOfBoard }>
      { mines.map((lineOfMine) => lineOfMine.map((mine) => <Area isGameStart={ isGameStart } onStartGame={ onStartGame } onCloseGame={ onCloseGame } handleMineStatus={ handleMineStatus } sizeOfBoard={ sizeOfBoard } { ...mine } />)) }
    </BoardWrapper>
  );
};

export default Minesweeper;
