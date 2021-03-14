import styled, { css } from 'styled-components';
import { COLOR } from '../../config/var';

const MineWrapper = styled.div`
    width: 50px;
    height: 50px;
    border: 1px black solid;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    ${css`
        background-color: ${(props) => (props.isVisible ? '#dff7f5' : '#0092e0')};
    `}
`;

const Cell = styled.div`
  ${(props) => (
    css`
      color: ${COLOR.numOfMines[props.text] || 'black'}
    `
  )}
`;

const onClick = (x, y, isGameStart, isMine, onStartGame, onCloseGame, onExpandVisibleMine) => {
  if (isGameStart) {
    if (isMine) {
      onCloseGame();
    } else {
      onExpandVisibleMine(x, y);
    }
  } else {
    onStartGame(x, y);
  }
};

const Mine = ({
  isWin, isMine, isVisible, numOfNeighbourMines, isGameStart, onStartGame, onCloseGame, x, y, onExpandVisibleMine
}) => {
  return (
    <MineWrapper isVisible={ isVisible } onClick={ () => onClick(x, y, isGameStart, isMine, onStartGame, onCloseGame, onExpandVisibleMine) }>
      <>
        { isWin ? (
          isMine
            ? <Cell text="💣">💣</Cell>
            : <Cell text={ numOfNeighbourMines }>{numOfNeighbourMines !== 0 ? numOfNeighbourMines : ''}</Cell>
        )
          : (isVisible && (isMine ? <Cell text="💣">💣</Cell> : <Cell text={ numOfNeighbourMines }>{numOfNeighbourMines !== 0 ? numOfNeighbourMines : ''}</Cell>))
        }
      </>
    </MineWrapper>
  );
};

export default Mine;
