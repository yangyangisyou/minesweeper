import styled, { css } from 'styled-components';

const AreaWrapper = styled.div`
    width: 50px;
    height: 50px;
    outline: 1px black solid;
    cursor: pointer;
    ${css`
        background-color: ${(props) => props.isVisible && '#FFB366'};
    `}
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

const Area = ({
  isWin, isMine, isVisible, numOfNeighbourMines, isGameStart, onStartGame, onCloseGame, x, y, onExpandVisibleMine
}) => {
  return (
    <AreaWrapper isVisible={ isVisible } onClick={ () => onClick(x, y, isGameStart, isMine, onStartGame, onCloseGame, onExpandVisibleMine) }>
      <>
        { isWin ? (
          isMine
            ? <span>💣</span>
            : <span>{numOfNeighbourMines !== 0 ? numOfNeighbourMines : ''}</span>
        )
          : (isVisible && (isMine ? <span>💣</span> : <span>{numOfNeighbourMines !== 0 ? numOfNeighbourMines : ''}</span>))
        }
      </>
    </AreaWrapper>
  );
};

export default Area;
