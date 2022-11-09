let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,

  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height); //확장성 높이기 위해 this 사용. x,y 값만 수정하면 변화 가능.
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
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let catuses = [];
let jump_timer = 0;
let onJump = false;

//1초에 60번 코드 실행하기. 프레임마다 실행됨. 실행횟수는 모니터 fps에 따라 다름.
function runByFrame() {
  requestAnimationFrame(runByFrame); //애니매이션 생성기
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 잔상 제거

  //일정주기마다 장애물 생성
  if (timer % 120 == 0) {
    let catus = new Catus();
    catuses.push(catus); // 장애물 여러개 생성 후 관리하기.
  }

  catuses.forEach((a, i, o) => {
    //x좌표가 0미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;
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

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    onJump = true;
  }
});

runByFrame();
