let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

img1 = new Image();
img1.src = "./catus2.jpg";
img2 = new Image();
img2.src = "./dino.png";

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,

  draw() {
    ctx.fillStyle = "green";
    //ctx.fillRect(this.x, this.y, this.width, this.height); //확장성 높이기 위해 this 사용. x,y 값만 수정하면 변화 가능.
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
  },
};
dino.x += 1;

class Catus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let catuses = [];
let jump_timer = 0;
let onJump = false;
let animation;

//1초에 60번 코드 실행하기. 프레임마다 실행됨. 실행횟수는 모니터 fps에 따라 다름.
function runByFrame() {
  animation = requestAnimationFrame(runByFrame); //애니매이션 생성기
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 잔상 제거

  //일정주기마다 장애물 생성
  if (timer % 200 == 0) {
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
    dino.y--;
    jump_timer++;
  }

  if (jump_timer > 100) {
    onJump = false;
  }

  if (onJump == false) {
    if (dino.y < 200) {
      dino.y++;
      jump_timer = 0;
    }
  }

  dino.draw();
}

//충돌 확인

function crash(dino, catus) {
  let x_differ = catus.x - (dino.x + dino.width); // 대상의 x좌표는 맨왼쪽에 있음.너비 더해주는 이유.
  let y_differ = catus.y - (dino.y + dino.height);

  if (x_differ < 0 && y_differ < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 화면 리셋
    cancelAnimationFrame(animation);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    onJump = true;
  }
});

runByFrame();
