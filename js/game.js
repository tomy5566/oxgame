//列出會贏的條件欄位
const checkingLines = [
  //橫的
  [1, 2 ,3],
  [4, 5 ,6],
  [7, 8 ,9],
  //直的
  [1, 4 ,7],
  [2, 5 ,8],
  [3, 6 ,9],
  //斜的
  [1, 5, 9],
  [3, 5, 7],
];

//找出空白(可以下)的欄位
//filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
function getEmptyPositions() {  
  return Array
    .from(Array(9).keys(), x => x + 1)
    .filter(position => !isPositionOccupied(position));

    console.log(Array.from);
    console.log(Array.from.filter);
  }

//已經被下的欄位(concat() 方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列)
function isPositionOccupied(position) {
  return positions["circle"].concat(positions["cross"]).includes(position);
}



//兩位玩家的 下棋位置
const positions = {
  circle: [],
  cross: [],
};

//初始玩家設定(一開始 O 先玩)
let currentPlayer = "circle";
// let clickingThrottle = false;
let gameoverFlag = false;

document.querySelectorAll("#app table tr td").forEach((cell) => {
  cell.addEventListener("click", onCellClicked);
});


//開始下棋
function onCellClicked(e) {
  console.log(e);
  console.log(e.target.dataset.index);
  // if (clickingThrottle) return;

  const position = Number(e.target.dataset.index);
  // if ( isPositionOccupied(position)) return;
  if (!position || isPositionOccupied(position)) return;

  draw(position, currentPlayer);
  positions[currentPlayer].push(position);
  // clickingThrottle = true;

  setTimeout(() => {
    checkWinningCondition(currentPlayer);
    changePlayer();
  }, 100);
}


//下OOXX(渲染出)
function draw(position, shape) {
  const cell = document.querySelector(
    `#app table tr td[data-index='${position}']`
  );
  cell.innerHTML = `<div class='${shape}'></div>`;
}


//判斷 當前玩家 的 勝利條件
function checkWinningCondition(player) {
  const winningPlayer = isPlayerWin(positions[player], player);
  if (winningPlayer) {
    gameoverFlag = true;
    // removeClickListners();
    return alert(`${winningPlayer} 玩家贏了!`);
  }

  if (getEmptyPositions().length === 0) {
    gameoverFlag = true;
    return alert("雙方平手");
  }

  // clickingThrottle = false;
}


//判斷是否勝利
//includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
//every() 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。回傳 true 或 false。
function isPlayerWin(checkingPositions, player) {
  // console.log(positions);
  for (const line of checkingLines) {
    // console.log(line);
    if (line.every((position) => checkingPositions.includes(position))) {
      return player;
    }
  }

  return null;
}



// 盡量把涵式功能單一化，所以單獨寫出來
function changePlayer() {
  currentPlayer = currentPlayer === "circle" ? "cross" : "circle";
}


//重新開始遊戲按鈕
const resetgame = document.querySelector('.resetgame');
resetgame.addEventListener('click',function(){location.reload(true)});



//移除監聽節省效能
// function removeClickListners() {
//   document.querySelectorAll("#app table tr td").forEach((cell) => {
//     cell.removeEventListener("click", onCellClicked);
//   });
// }
