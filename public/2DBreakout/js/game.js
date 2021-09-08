const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");


ctx.lineWidth = 3;

const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;
const BALL_RADIOUS = 8;
let leftArrow =  false;
let rightArrow = false;
let LIFE = 3;
let SCORE = 0;
const SCORE_UNIT = 10;
let LEVEL = 1;
const MAX_LEVEL = 5;
let GAME_OVER = false;


const paddle = {
    x : cvs.width/2 - PADDLE_WIDTH/2,
    y : cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
    width : PADDLE_WIDTH,
    height : PADDLE_HEIGHT,
    dx :5
}

const ball = {
    x: cvs.width/2,
    y: paddle.y - BALL_RADIOUS,
    radius: BALL_RADIOUS,
    speed: 8,
    dx: 3  * (Math.random() * 2 - 1),
    dy: -3
}

const brick = {
    row : 2,
    column : 5,
    width : 55,
    height : 20,
    offSetLeft : 20,
    offSetTop : 20,
    marginTop : 40,
    fillColor : "#2e3548",
    strokeColor : "#FFF"
}

document.addEventListener("keydown",function(event){
    if(event.keyCode == 37){
        leftArrow = true;
    }else if(event.keyCode == 39){
        rightArrow = true;
    }
})

document.addEventListener("keyup",function(event){
    if(event.keyCode == 37){
        leftArrow = false;
    }else if(event.keyCode == 39){
        rightArrow = false;
    }
})

let bricks = [];

function createBricks(){
    for(let r = 0; r < brick.row; r++){
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++){
            bricks[r][c] = {
                x : c * ( brick.offSetLeft + brick.width ) + brick.offSetLeft,
                y : r * ( brick.offSetTop + brick.height ) + brick.offSetTop + brick.marginTop,
                status : true
            }
        }
    }
}

createBricks();

function drawBricks(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            // if the brick isn't broken
            if(b.status){
                ctx.fillStyle = brick.fillColor;
                ctx.fillRect(b.x, b.y, brick.width, brick.height);
                
                ctx.strokeStyle = brick.strokeColor;
                ctx.strokeRect(b.x, b.y, brick.width, brick.height);
            }
        }
    }
}

function ballBrickCollision(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            // if the brick isn't broken
            if(b.status){
                if(ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height){
                    ball.dy = - ball.dy;
                    b.status = false; // the brick is broken
                    SCORE += SCORE_UNIT;
                    WALL_HIT.play();
                }
            }
        }
    }
}


//move paddle
function movePaddle(){
    if(rightArrow && paddle.x + paddle.width < cvs.width){
        paddle.x += paddle.dx;
    }else if(leftArrow && paddle.x > 0){
        paddle.x -= paddle.dx;
    }
}

function moveBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function ballCollision(){
    if(ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0){
        ball.dx = -ball.dx;
    }
    if(ball.y - ball.radius < 0){
        ball.dy = -ball.dy;
    }
    if(ball.y + ball.radius > cvs.height){
        LIFE--;
        LIFE_LOST.play();
        resetBall();
    }
}

function resetBall(){
    ball.x = cvs.width/2;
    ball.y = paddle.y - BALL_RADIOUS;
    ball.dx = 3 * (Math.random() * 2 - 1);
    ball.dy = -3;
}
// draw ball
function drawBall(){
    ctx.beginPath();

    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "#28ed2f"

    ctx.fill();

    ctx.strokeStyle = "#2e3548";
    ctx.stroke();
    
    ctx.closePath();
}

function ballPaddleColision(){
    if(ball.x < paddle.x + paddle.width && ball.x > paddle.x && paddle.y < paddle.y + paddle.height && ball.y > paddle.y){

        let collidePoint = ball.x - (paddle.x + paddle.width/2);

        //normalize value
        collidePoint /= (paddle.width/2);
        
        //ball angle
        let angle  = collidePoint * Math.PI / 3;


        PADDLE_HIT.play();
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = -ball.speed * Math.cos(angle);
    }
}

function levelUp(){
    let isLevelDone = true;
    
    // check if all the bricks are broken
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            isLevelDone = isLevelDone && ! bricks[r][c].status;
        }
    }
    
    if(isLevelDone){
        
        if(LEVEL >= MAX_LEVEL){
            showYouWin();
            WIN.play();
            GAME_OVER = true;
            return;
        }
        brick.row++;
        createBricks();
        ball.speed += 0.5;
        resetBall();
        LEVEL++;
    }
}

function showGameStats(text, textX, textY, img, imgX, imgY){
    ctx.fillStyle = "#FFF";
    ctx.font = "25px Germania One";
    ctx.fillText(text, textX, textY);
    
    ctx.drawImage(img, imgX, imgY, width = 25, height = 25);
}

function gameOver(){
    if(LIFE <= 0){
        showYouLose();

        GAME_OVER = true;
    }
}

// draw paddle
function drawPaddle(){
    ctx.fillStyle = "#fc7303";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    
    ctx.strokeStyle = "#22d4b3";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function draw(){
    drawPaddle();
    drawBall();
    drawBricks();

    showGameStats(SCORE, 35, 25, SCORE_IMG, 5, 5);
    showGameStats(LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5); 
    showGameStats(LEVEL, cvs.width/2, 25, LEVEL_IMG, cvs.width/2 - 30, 5);
}

function update(){
    movePaddle();
    moveBall();
    ballCollision();
    ballPaddleColision();
    ballBrickCollision();
    gameOver();
    levelUp();
}


function loop(){
    ctx.drawImage(BG_IMG, 0, 0);

    draw();
    update();
    if(!GAME_OVER){
        requestAnimationFrame(loop);
    }
}

loop();



const soundElement  = document.getElementById("sound");

soundElement.addEventListener("click", audioManager);

function audioManager(){
    let imgSrc = soundElement.getAttribute("src");
    let SOUND_IMG = imgSrc == "images/web-01-512.png" ? "images/unmute.png" : "images/web-01-512.png";
    
    soundElement.setAttribute("src", SOUND_IMG);
    
    WALL_HIT.muted = WALL_HIT.muted ? false : true;
    PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
    BRICK_HIT.muted = BRICK_HIT.muted ? false : true;
    WIN.muted = WIN.muted ? false : true;
    LIFE_LOST.muted = LIFE_LOST.muted ? false : true;
}

const gameover = document.getElementById("gameover");
const youwin = document.getElementById("youwin");
const youlose = document.getElementById("youlose");
const restart = document.getElementById("restart");

restart.addEventListener("click", function(){
    location.reload(); // reload the page
})

function showYouWin(){
    gameover.style.display = "block";
    youwon.style.display = "block";
}

function showYouLose(){
    gameover.style.display = "block";
    youlose.style.display = "block";
}



