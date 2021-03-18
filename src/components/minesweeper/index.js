import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import Mine from './mine';
import Modal from '../../shared/modal';
import {
  initialBoard, initialMines, onExpandVisibleMine, countNumOfNeighbourMines, onCloseGame, onFlaggedMine
} from '../../actions/minesweeper';

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
  const dispatch = useDispatch();
  const mines = useSelector((state) => state.minesweeper.mines);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isShowGameOver, setIsShowGameOver] = useState(false);
  const isWin = !isShowGameOver && numOfMines === (sizeOfBoard ** 2 - mines.reduce((sumOfRow, rowOfMines) => sumOfRow + rowOfMines.reduce((sumOfColumn, targetMine) => sumOfColumn + (targetMine.isVisible ? 1 : 0), 0), 0));
  const modalText = isWin ? 'You win!!' : (isShowGameOver ? 'You clicked the bomb!!' : '');
  const modalOkText = isWin ? 'Play again' : (isShowGameOver ? 'OK' : '');
  const modalImage = isWin ? 'https://media3.giphy.com/media/qYGvebgOKGygdQgflY/giphy.gif?cid=ecf05e47i0qme2wi67ynw5qtcvav9yxuzpgvg3cvwimwob4o&rid=giphy.gif' : isShowGameOver ? 'https://media0.giphy.com/media/11KSh7jeHLEp5m/giphy.gif?cid=ecf05e47o4nh1dozkvly9x6bfcbv19gbhqqui2jw1zb9bcem&rid=giphy.gif' : '';

  const onUserClick = (x, y, isBomb, isFlag) => {
    if (isGameStart) {
      if (isBomb && !isFlag) {
        dispatch(onCloseGame(x, y));
        setIsShowGameOver(true);
      } else if (!isFlag) {
        dispatch(onExpandVisibleMine(x, y));
      }
    } else {
      dispatch(initialMines(x, y));
      dispatch(countNumOfNeighbourMines());
      dispatch(onExpandVisibleMine(x, y));
      setIsGameStart(true);
    }
  };

  const onRightClick = (x, y, isFlag, element) => {
    element && element.preventDefault();
    dispatch(onFlaggedMine(x, y, isFlag));
  };

  const onOkModal = () => {
    dispatch(initialBoard(sizeOfBoard, numOfMines));
    setIsShowGameOver(false);
    setIsGameStart(false);
  };

  useEffect(() => {
    dispatch(initialBoard(sizeOfBoard, numOfMines));
    setIsGameStart(false);
    setIsShowGameOver(false);
  }, [dispatch, sizeOfBoard, numOfMines]);

  return (
    <BoardWrapper sizeOfBoard={ sizeOfBoard }>
      { mines.map((lineOfMine, row) => lineOfMine.map((mine, column) => (
        <Mine
          isWin={ isWin }
          key={ `${column}-${row}` }
          onClick={ onUserClick }
          onRightClick={ onRightClick }
          { ...mine }
        />
      ))) }
      <Modal
        text={ modalText }
        okText={ modalOkText }
        imgSrc={ modalImage }
        isVisible={ isShowGameOver || isWin }
        onClick={ onOkModal }
      />
    </BoardWrapper>
  );
};

export default Minesweeper;
