import { useState } from 'react';
import styled from 'styled-components';
import MinesweeperBoard from '../../components/minesweeper';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5vh 5vw;
    background-color: #d1fdac;
    height: 100vh;
    .title {
        font-size: 32px;
        font-weight: 500;
        margin: 20px;
    }
`;
const MinesweeperPage = () => {
  const [sizeOfBoard] = useState(6);
  const [numOfMines] = useState(4);
  return (
    <PageWrapper>
      <h1 className="title">Minesweeper</h1>
      <MinesweeperBoard sizeOfBoard={ sizeOfBoard } numOfMines={ numOfMines } />
    </PageWrapper>
  );
};

export default MinesweeperPage;
