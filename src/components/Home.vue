<template>
  <section class="showcase" id="main">
     <div class="video-container">
      <video src="../assets/Arcade.mp4" type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="content">
      <h1>GameCenter</h1>
      <h3 class="font-w-200">Best games for best gamers</h3>
      <div class="games-con">
        <a class="game" href="http://localhost:8080/snake/snake/index.html" target="_blank">
          <img src="../assets/snake.svg" alt class="img-game" />
        </a>
        <a class="game" href="http://localhost:8080/2DBreakout/index.html" target="_blank">
          <img src="../assets/breakout.svg" alt class="img-game" />
        </a>
        <a class="game" href="http://localhost:8080/PingPong/index.html" target="_blank">
          <img src="../assets/sports.svg" alt class="img-game" />
        </a>
         <a class="game" href="http://localhost:8080/flappy-bird/index.html" target="_blank">
          <img src="../assets/bird.svg" alt class="img-game" />
          </a>
          <a class="game" href="http://localhost:8080/InsectCatch/index.html" target="_blank">
          <img src="../assets/insect.svg" alt class="img-game"/>
          </a>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "Home",
 
};
</script>

<style scoped>
.font-w-200 {
  font-weight: 200;
}

.showcase {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white-color);
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--secondary-color);
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.video-container:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--black-alpha-6);
}

.content {
  z-index: 10;
}

.games-con {
  padding: 20px;
  margin: 10px;
  background: var(--black-alpha-6);
  border-radius: 10px;
  cursor: url("../assets/mouse.png"), pointer;
}

.game {
  margin: 10px;
  color: var(--white-color);
}

.img-game {
  width: 60px;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 500px) {
  .img-game {
    width: 50px;
  }
  
}
</style>
