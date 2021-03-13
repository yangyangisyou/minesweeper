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
  isMine, isVisible, numOfNeighbourMines, isGameStart, onStartGame, onCloseGame, x, y, onExpandVisibleMine
}) => {
//   console.log(isMine, isVisible, numOfNeighbourMines);
  return (
    <AreaWrapper isVisible={ isVisible } onClick={ () => onClick(x, y, isGameStart, isMine, onStartGame, onCloseGame, onExpandVisibleMine) }>
      <>
        {
            isVisible && (isMine ? <span>💣</span> : <span>{numOfNeighbourMines}</span>)
        }
      </>
    </AreaWrapper>
  );
};

export default Area;
