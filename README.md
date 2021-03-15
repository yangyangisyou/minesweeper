# Minesweeper
This project is based on react.js and styled-components.
You can play on [this page](https://minesweeper.yyisyou.tw).

## Tech stack
<p float="left" margin="10px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height="100px"> 
  <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="100px">
  <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" height="100px">  
</p>

* React.js 17.0.1  
* styled-components 5.2.1  

## Rules
### Win
When user spreads all the empty mines.

### Fail
When user click the bomb.

## Components
### Minesweeper Board: (sizeOfBoard, numOfMines)
Minesweeper board includes a set of mines.

#### initialBoard()
Initialize the Mines status.

#### onExpandVisibleMine()
Handle the mine's empty neighbour visible.

#### handleNumOfNeighbourMines()
Count sum of the neighbour's bombs.

#### onStartGame(x, y)
Start the game while user is clicking first.

#### onCloseGame(x, y)
Start the game while user is clicking the bomb.

#### onUserClick(x, y, isMine, isFlag)
User left click the mine for choose the mine.

#### onRightClick(element, x, y)
User right click the mine for mark the flag.

### Mine: (x, y, isFlag, isMine, isVisible, isWin, onContextMenu, onClick, numOfNeighbourMines)
Mine has different status, includes isFlag, isMine, isVisible and numOfNeighbourMines.

#### cellText(isFlag, isMine, isVisible, isWin, numOfNeighbourMines)
Generate the mine status.

### How to run
1. Install dependencies
```
npm install
```

2. Run this application
```
npm run start
```





