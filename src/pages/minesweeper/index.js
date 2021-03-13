import MinesweeperBoard from '../../components/minesweeper';

const MinesweeperPage = () => {
  const sizeOfBoard = 6;
  const numOfMines = 4;
  return (
    <>
      <MinesweeperBoard sizeOfBoard={ sizeOfBoard } numOfMines={ numOfMines } />
    </>
  );
};

export default MinesweeperPage;
