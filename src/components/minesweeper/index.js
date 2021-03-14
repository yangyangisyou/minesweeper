import { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Mine from './mine';
import Modal from '../../shared/modal';

const BoardWrapper = styled.div`
    ${({ sizeOfBoard }) => (
    css`
        display: grid;
        max-width: calc(${sizeOfBoard} * 55px);
        grid-gap: 5px;
        grid-template-columns: repeat(${sizeOfBoard}, 1fr);
        grid-template-rows: repeat(${sizeOfBoard}, 1fr);
      `
  )}
`;

const Minesweeper = ({ sizeOfBoard, numOfMines }) => {
  const [mines, setMines] = useState([[]]);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isShowGameOver, setIsShowGameOver] = useState(false);
  const isWin = numOfMines === (sizeOfBoard ** 2 - mines.reduce((sumOfRow, rowOfMines) => sumOfRow + rowOfMines.reduce((sumOfColumn, targetMine) => sumOfColumn + (targetMine.isVisible ? 1 : 0), 0), 0));
  const modalText = isWin ? 'You win!!' : (isShowGameOver ? 'You clicked the mine!!' : '');
  const modalOkText = isWin ? 'Play again' : (isShowGameOver ? 'OK' : '');

  const initialBoard = useCallback(() => {
    let updatedMines = [];
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
      updatedMines.push(lineOfMine);
    }
    setMines(updatedMines);
    setIsShowGameOver(false);
    setIsGameStart(false);
  }, [sizeOfBoard]);

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
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let queue = [[y, x]];
    while (queue.length > 0) {
      let [yOfQueue, xOfQueue] = queue.shift();
      const isNotOutOfBound = (xOfQueue >= 0 && xOfQueue < sizeOfBoard && yOfQueue >= 0 && yOfQueue < sizeOfBoard);
      console.log(yOfQueue, xOfQueue);
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
    setMines(updatedMines);
  };

  useEffect(() => {
    initialBoard();
  }, [initialBoard]);

  return (
    <BoardWrapper sizeOfBoard={ sizeOfBoard }>
      { mines.map((lineOfMine, row) => lineOfMine.map((mine, column) => <Mine key={ `${column}-${row}` } isWin={ isWin } isGameStart={ isGameStart } onStartGame={ onStartGame } onCloseGame={ onCloseGame } onExpandVisibleMine={ onExpandVisibleMine } sizeOfBoard={ sizeOfBoard } { ...mine } />)) }
      <Modal text={ modalText } isVisible={ isShowGameOver || isWin } onClick={ () => initialBoard(sizeOfBoard) } okText={ modalOkText } />
    </BoardWrapper>
  );
};

export default Minesweeper;
