let mark = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let buttons = document.querySelectorAll("button");
let title = document.querySelector(".title");
let turn = document.querySelector("#turn_mark");
buttons.forEach(_button => {
  _button.inne = " ";
  _button.addEventListener("click", clickHandle);
});

function clickHandle(e) {
  board[e.target.id] = mark;
  e.target.innerText = mark;
  e.target.disabled = true;
  Draw();
  if (Win()) {
    title.innerText = "Win " + mark;
    turn.innerText = "";
    buttons.forEach(b => (b.disabled = true));
  }
  changeMark();
}

function changeMark() {
  if (mark == "X") {
    mark = "O";
  } else {
    mark = "X";
  }
  turn.innerText = mark;
}

function Win() {
  for (let i = 0; i <= 6; i += 3) {
    if (
      board[i] == board[i + 1] &&
      board[i] == board[i + 2] &&
      board[i] != ""
    ) {
      console.log("Row Win");

      return true;
    }
  }
  for (let i = 0; i <= 2; i++) {
    if (
      board[i] == board[i + 3] &&
      board[i] == board[i + 6] &&
      board[i] != ""
    ) {
      console.log("Col Win");

      return true;
    }
  }
  if (board[0] == board[4] && board[0] == board[8] && board[0] != "") {
    console.log("Win 0");

    return true;
  }
  if (board[2] == board[4] && board[2] == board[6] && board[2] != "") {
    console.log("Win 0");

    return true;
  }

  return false;
}
function Draw() {
  console.log(board);
  console.log(board.indexOf(""));
  if (board.indexOf("") == -1) {
    title.innerText = "Draw";
    console.log("Draw");
  }
}
