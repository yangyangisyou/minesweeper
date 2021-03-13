import styled from 'styled-components';

const AreaWrapper = styled.div`
    background-color: white;
    width: 50px;
    height: 50px;
    outline: 1px black solid;
    cursor: pointer;
`;

const onClick = (x, y, isGameStart, isMine, onStartGame, onCloseGame, handleMineStatus) => {
  if (isGameStart) {
    if (isMine) {
      onCloseGame();
    } else {
      handleMineStatus();
    }
  } else {
    onStartGame(x, y);
  }
};

const Area = ({
  isMine, isDisplay, numOfAroundMine, isGameStart, onStartGame, onCloseGame, handleMineStatus, x, y
}) => {
  console.log(isMine, isDisplay, numOfAroundMine);
  return (
    <AreaWrapper onClick={ () => onClick(x, y, isGameStart, isMine, onStartGame, onCloseGame, handleMineStatus) }>
      {
            isMine && <span>💣</span>
        }
    </AreaWrapper>
  );
};

export default Area;