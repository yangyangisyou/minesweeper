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
        background-color: ${({ isVisible, isBoom }) => (isBoom ? 'red' : (isVisible ? '#dff7f5' : '#0092e0'))};
    `}
`;

const Cell = styled.div`
  ${(props) => (
    css`
      color: ${COLOR.numOfMines[props.text] || 'black'}
    `
  )}
`;

const cellText = (isFlag, isMine, isVisible, isWin, numOfNeighbourMines) => {
  if (isFlag) {
    return '🚩';
  } else if (isWin || (isMine && isVisible)) {
    return '💣';
  } else if (isWin || isVisible) {
    return numOfNeighbourMines || '';
  } else {
    return '';
  }
};

const Mine = ({
  isWin, isMine, isVisible, numOfNeighbourMines, x, y, onContextMenu, onClick, isFlag
}) => {
  const isBoom = isVisible && isMine;
  return (
    <MineWrapper isVisible={ isVisible } isBoom={ isBoom } onClick={ () => onClick(x, y, isMine, isFlag) } onContextMenu={ (element) => onContextMenu(element, x, y, isFlag) }>
      <>
        <Cell text={ cellText(isFlag, isMine, isVisible, isWin, numOfNeighbourMines) }>{cellText(isFlag, isMine, isVisible, isWin, numOfNeighbourMines)}</Cell>
      </>
    </MineWrapper>
  );
};

export default Mine;
