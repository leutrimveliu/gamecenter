<template>
  <section class="showcase" id="main">
    <div class="content">
      <h1>GameCenter</h1>
      <h3 class="font-w-200">Best games for best gamers</h3>
      <div class="games-con">
        <a class="game" href="http://localhost:8080/snake/snake/index.html" target="_blank">
          <img src="../assets/snake.svg" alt class="img-game" />
        </a>
      </div>
    </div>
    <transition name="fade">
      <div class="logout-btn-con" v-if="show">
        <button v-if="isEditing" @click="changeTheme" class="btn-auth btn-theme">Color OFF</button>
        <button v-else @click="changeTheme" class="btn-auth btn-theme">Color ON</button>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
      isEditing: false
    };
  },
  methods: {
    changeTheme() {
      this.isEditing = !this.isEditing;
      document.body.classList.toggle("grayscale-100");
    }
  },
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

.auth {
  position: fixed;
  top: 15px;
  right: 20px;
  width: 225px;
  height: 60px;
  padding: 5px;
  border-radius: 30px;
  background: var(--white-alpha-3);
  z-index: 20;
}

.logout-btn-con {
  position: fixed;
  top: 15px;
  right: 20px;
  width: 225px;
  height: 180px;
  padding: 5px;
  border-radius: 30px;
  z-index: 15;
  background: var(--white-alpha-6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.btn-auth {
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  font-size: 1.6em;
  outline: none;
}

.btn-theme {
  margin-bottom: 7px;
  background: var(--white-alpha-6);
  color: var(--secondary-color);
}

.btn-logout {
  background: var(--btn-red);
  color: var(--white-color);
}

.btn-login {
  background: var(--btn-green);
  color: var(--white-color);
}

.user-info-con {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info-con p {
  user-select: none;
}

.user-info-con img {
  width: 50px;
  border-radius: 50%;
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

.btn {
  display: inline-block;
  padding: 5px 15px;
  color: var(--white-color);
  font-size: 12px;
  border: 1px var(--white-color) solid;
  border-radius: 5px;
  opacity: 0.7;
  transition: transform 300ms;
}

.btn:hover {
  transform: scale(0.9);
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
  .btn-theme {
    margin-bottom: 4px;
  }
}
</style>
