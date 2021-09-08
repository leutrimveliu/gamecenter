function clearCanvas(cc) {
  cc.fillStyle = clearColor;
  cc.fillRect(0, 0, cw, ch);
}

function drawRect(cc, x, y, w, h, color) {
  cc.fillStyle = color;
  cc.fillRect(x, y, w, h);
}
function drawCircle(cc, x, y, r, color) {
  cc.fillStyle = color;
  cc.beginPath();
  cc.arc(x, y, r, 0, 2 * Math.PI);
  cc.fill();
}

function rectColl(ax, ay, aw, ah, bx, by, bw, bh) {
  if (ax < bx + bw && ax + aw > bx && ay < by + bh && ah + ay > by) {
    return true;
  }
  return false;
}

function outBound(x, y, w, h, rx, ry, rw, rh) {
  if (x < rx || x + w > rw) {
    return "x";
  }
  if (y < ry || y + h > rh) {
    return "y";
  }
  return false;
}

function displayMessage(index){
    WIN.play();
    if(index < 0){
        document.getElementById("score_user").innerHTML = "Goal for left user!";
    }else{
        document.getElementById("score_user").innerHTML = "Goal for right user! ";
    }
   
    setTimeout(function(){
        document.getElementById("score_user").innerHTML = '';
    }, 3000);
}