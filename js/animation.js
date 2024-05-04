function clickHeartEvent() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "5%";
  canvas.style.left = "-2.5%";
  canvas.style.zIndex = 9999;
  canvas.width = document.querySelector(".container").clientWidth + 40;
  canvas.height = document.querySelector(".container").clientHeight;
  document.documentElement.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  class Ball {
    constructor(x, y, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
    }
  }
  let img = new Image();
  img.src = "/images/heart-solid.svg";
  function drawBall(ball) {
    ctx.drawImage(img, ball.x, ball.y);
  }

  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let ball = new Ball(x, y);
  drawBall(ball);

  const balls = []; // 공 배열 생성
  let ballCount = 0; //공의 숫자

  //움직이는 공을 추가하는 함수
  function addBall() {
    const x = Math.random() * (canvas.width - 40) + 20; //공의 X좌표 랜덤
    const y = Math.random() * (canvas.height - 40) + 20; //공의 y좌표 랜덤

    const xSpeed = Math.random() * 4 - 2; //공의 X좌표 속도 랜덤
    const ySpeed = Math.random() * 4 - 2; //공의 y좌표 속도 랜덤
    const newBall = new Ball(x, y, xSpeed, ySpeed); //공 생성
    balls.push(newBall); //공 배열에 넣어준다
    ballCount++; //공의 개수
  }

  // 공을 움직는 함수
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 공을 지워준다

    // 모든 공들에 대해서 좌표를 업데이트하고 경계를 넘어갔다면 반대방향으로 이동
    for (const ball of balls) {
      ball.x += ball.xSpeed;
      ball.y += ball.ySpeed;
      if (ball.x + 20 > canvas.width || ball.x - 20 < 0) {
        ball.xSpeed = -ball.xSpeed;
      }
      if (ball.y + 20 > canvas.height || ball.y - 20 < 0) {
        ball.ySpeed = -ball.ySpeed;
      }
      drawBall(ball); // 계산된 좌표로 공을 다시 그려준다
    }
    let req = requestAnimationFrame(animate); // 다음 프레임을 실행

    if (ballCount > 400) {
      cancelAnimationFrame(req);
      const canvas = document.getElementsByTagName("canvas");
      location.reload();
    }
  }

  // 공 추가 타이머 설정
  setInterval(addBall, 0.7);
  // 애니메이션 시작
  animate();

  clearTimeout(animate);
}
