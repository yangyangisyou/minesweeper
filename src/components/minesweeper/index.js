import { useState } from 'react';
import styled, { css } from 'styled-components';
import Area from './area';
import Modal from '../../shared/modal';

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
        isVisible: false,
      });
    }
    mines.push(lineOfMine);
  }
  return mines;
};

const handleMineStatus = () => {

};

const Minesweeper = ({ sizeOfBoard, numOfMines }) => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [mines, setMines] = useState(initialBoard(sizeOfBoard));
  const [isShowGameOver, setIsShowGameOver] = useState(false);
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
    onExpandVisibleMine(x, y);
  };

  const onCloseGame = (x, y) => {
    console.log(x, y);
    setIsShowGameOver(true);
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

  const onExpandVisibleMine = (x, y) => {
    let updatedMines = [...mines];
    // if (mines[y][x].numOfNeighbourMines > 0) {
    //   updatedMines[y][x] = {
    //     ...updatedMines[y][x],
    //     isVisible: true,
    //   };
    // } else
    // {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let queue = [[y, x]];
    while (queue.length > 0) {
      let [yOfQueue, xOfQueue] = queue.shift();
      const isValid = (xOfQueue >= 0 && xOfQueue < sizeOfBoard && yOfQueue >= 0 && yOfQueue < sizeOfBoard);
      console.log(yOfQueue, xOfQueue);
      if (isValid && (updatedMines[yOfQueue][xOfQueue].numOfNeighbourMines > 0 || updatedMines[yOfQueue][xOfQueue].isVisible)) {
        updatedMines[yOfQueue][xOfQueue].isVisible = true;
      } else if (isValid) {
        updatedMines[yOfQueue][xOfQueue].isVisible = true;
        for (let k = 0; k < dx.length; k++) {
          queue.push([yOfQueue + dy[k], xOfQueue + dx[k]]);
        }
      }

      // let [x, y] = queue.shift();
      // (y - 1 >= 0) && (x - 1 >= 0) && mines[y - 1][x - 1].numOfNeighbourMines === 0 && count++;
      // (y - 1 >= 0) && mines[y - 1][x].isMine && count++;
      // (y - 1 >= 0) && (x + 1 < sizeOfBoard) && mines[y - 1][x + 1].isMine && count++;
      // (y + 1 < sizeOfBoard) && (x - 1 >= 0) && mines[y + 1][x - 1].isMine && count++;
      // (y + 1 < sizeOfBoard) && mines[y + 1][x].isMine && count++;
      // (y + 1 < sizeOfBoard) && (x + 1 < sizeOfBoard) && mines[y + 1][x + 1].isMine && count++;
      // (x - 1 >= 0) && mines[y][x - 1].isMine && count++;
      // (x + 1 < sizeOfBoard) && mines[y][x + 1].isMine && count++;
    }

    //   }
    // }
    // }
    console.log('updatedMines', updatedMines);
    setMines(updatedMines);
  };

  return (
    <BoardWrapper sizeOfBoard={ sizeOfBoard }>
      { mines.map((lineOfMine, row) => lineOfMine.map((mine, column) => <Area key={ `${column}-${row}` } isGameStart={ isGameStart } onStartGame={ onStartGame } onCloseGame={ onCloseGame } handleMineStatus={ handleMineStatus } onExpandVisibleMine={ onExpandVisibleMine } sizeOfBoard={ sizeOfBoard } { ...mine } />)) }
      <Modal text="You clicked the mine!!" isVisible={ isShowGameOver } onClick={ () => setIsShowGameOver(false) } />
    </BoardWrapper>
  );
};

export default Minesweeper;
