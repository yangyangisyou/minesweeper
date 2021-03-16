import styled, { css } from 'styled-components';
import { COLOR } from '../../config/var';
import useLongPress from '../../util/useLongPress.js';

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
    css` color: ${COLOR.numOfMines[props.text] || 'black'}`
  )}
`;

const cellText = (isFlag, isBomb, isVisible, isWin, numOfNeighbourMines) => {
  if (isFlag) {
    return '🚩';
  } else if ((isBomb && isWin) || (isBomb && isVisible)) {
    return '💣';
  } else if (isWin || isVisible) {
    return numOfNeighbourMines || '';
  } else {
    return '';
  }
};

const Mine = ({
  x, y, isFlag, isBomb, isVisible, isWin, onRightClick, onClick, numOfNeighbourMines
}) => {
  const isBoom = isVisible && isBomb;
  const text = cellText(isFlag, isBomb, isVisible, isWin, numOfNeighbourMines);
  const userLongPress = useLongPress(() => onRightClick(x, y, isFlag), 800);
  return (
    <MineWrapper
      isVisible={ isVisible }
      isBoom={ isBoom }
      onClick={ () => onClick(x, y, isBomb, isFlag) }
      onContextMenu={ (element) => onRightClick(x, y, isFlag, element) }
      { ...userLongPress }
    >
      <Cell text={ text }>{text}</Cell>
    </MineWrapper>
  );
};

export default Mine;
