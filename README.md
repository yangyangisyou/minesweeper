# Minesweeper - a classic game
This project is based on react.js and styled-components.  
You can play on [this page](https://minesweeper.yyisyou.tw).  
<img src="https://upload.cc/i1/2021/03/16/oIgJiY.png" height="400px"> 

## How to play
### Click mine
When user click a mine, it would expend its area util number of neighbour not zero.  
<img src="https://upload.cc/i1/2021/03/16/hpJUDE.png" height="400px"> 

### Use flag
User can use flag to predict which mine includes bomb.  
<img src="https://upload.cc/i1/2021/03/16/Koe15L.png" height="400px"> 

### Win the game
When user spreads all the empty mines, then user wins the game and show all of bombs.  
<img src="https://upload.cc/i1/2021/03/16/OIQkCD.png" height="400px"> 


### Fail the game
When user click the bomb, then user fails the game.  
<img src="https://upload.cc/i1/2021/03/16/5LAgvk.png" height="400px"> 

## Tech stack
<p float="left" margin="10px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height="100px"> 
  <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="100px">
  <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" height="100px">  
</p>

* React.js 17.0.1  
* styled-components 5.2.1  

## Flow chart
![](https://upload.cc/i1/2021/03/16/Y1rpj0.png)


## Components
### Minesweeper Board: (sizeOfBoard, numOfMines)
Minesweeper board includes a set of mines.

1. initialBoard()
* Initialize the Mines status.

2. onExpandVisibleMine()
* Handle the mine's empty neighbour visible.

3. handleNumOfNeighbourMines()
* Count sum of the neighbour's bombs.

4. onStartGame(x, y)
* Start the game while user is clicking first.

5. onCloseGame(x, y)
* Start the game while user is clicking the bomb.

6. onUserClick(x, y, isBomb, isFlag)
* User left click the mine for choose the mine.

7. onRightClick(x, y, isFlag, element)
* User right click the mine for mark the flag.

### Mine: (x, y, isFlag, isBomb, isVisible, isWin, onContextMenu, onClick, numOfNeighbourMines)
Mine has different status, includes isFlag, isBomb, isVisible and numOfNeighbourMines.

1. cellText(isFlag, isBomb, isVisible, isWin, numOfNeighbourMines)
* Generate the mine status.

### How to run
1. Install dependencies
```
npm install
```

2. Run this application
```
npm run start
```

3. Open the link, the default port is 3000
```
http://localhost:3000
```




