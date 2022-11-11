let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 650;
canvas.height = window.innerHeight - 100;

img1 = new Image();
img1.src = "./catus.jpg";
img2 = new Image();
img2.src = "./dino.png";

//ctx.drawImage();

//공룡 객체
let dino = {
  x: 10,
  y: 300,
  width: 50,
  height: 50,

  draw() {
    ctx.fillStyle = "green";
    //ctx.fillRect(this.x, this.y, this.width, this.height); //확장성 높이기 위해 this 사용. x,y 값만 수정하면 변화 가능.
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
  },
};
dino.x += 1;

//선인장 객체
class Catus {
  constructor() {
    this.x = 1200;
    this.y = 300;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y, this.width, this.height);
  }
}

//점수판
let score = 0;

function drawscore() {
  score += 1;
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0f2a3f";
  ctx.fillText("Score:" + score, 50, 20);
}

//선 객체
class Line {
  constructor() {
    this.x = 100;
    this.y = 350;
    this.width = canvas.width;
    this.height = 1;
  }
  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let catuses = [];
let jump_timer = 0;
let onJump = false;
let animation;
let keypressed = [];

//1초에 60번 코드 실행하기. 프레임마다 실행됨. 실행횟수는 모니터 fps에 따라 다름.
function runByFrame() {
  ctx;
  animation = requestAnimationFrame(runByFrame); //애니매이션 생성기
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 잔상 제거

  let line = new Line();

  line.draw();

  drawscore();

  //일정주기마다 장애물 생성
  if (timer % 300 == 0) {
    let catus = new Catus();
    catuses.push(catus); // 장애물 여러개 생성 후 관리하기.
  }

  catuses.forEach((a, i, o) => {
    //x좌표가 0미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;

    crash(dino, a); //공룡과 모든 장애물 충돌 체크

    a.draw();
  }); // 장애물 여러 개 생성.

  //스페이스 누를 시 점프 코드
  if (onJump == true) {
    dino.y -= 2; //dino.y = 300
    jump_timer++;
  }

  if (jump_timer > 50) {
    onJump = false;
  }

  if (onJump == false) {
    if (dino.y < 300) {
      dino.y += 2;
      jump_timer = 0;
    }
  }
  // 공룡 왼쪽으로 사라짐 방지.
  if (dino.x < 0) {
    dino.x = 5;
  }

  if (keypressed[37]) {
    //왼쪽 방향키 이동
    dino.x = dino.x - 3;
  }
  if (keypressed[39]) {
    //오른쪽 방향키 이동
    dino.x = dino.x + 3;
  }

  dino.draw();
}

//충돌 확인

function crash(dino, catus) {
  let x_differ = catus.x - (dino.x + dino.width); // 대상의 x좌표는 맨왼쪽에 있음.너비 더해주는 이유.
  let y_differ = catus.y - (dino.y + dino.height);

  if (x_differ < 0 && y_differ < 0) {
    cancelAnimationFrame(animation);
    ctx.fillStyle = "red";
    ctx.font = "60px";
    ctx.fillText(
      "재시작하시려면 엔터를 눌러주세요",
      canvas.width / 2 - 50,
      canvas.height / 2 + 200
    );
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    onJump = true;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    location.reload();
  }
});

window.addEventListener("keydown", getKeyDown, false);
window.addEventListener("keyup", getKeyUp, false);

function getKeyDown(event) {
  keypressed[event.keyCode] = true;
}

function getKeyUp(event) {
  keypressed[event.keyCode] = false;
}

runByFrame();