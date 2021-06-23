<template>
  <section id="footer">
    <h1>About</h1>
    <p><strong>Game Center</strong> was made to explore. You'll find every kind of game you love, and others like you've never seen. With new characters, stories, and worlds arriving arriving each month. So you never run out of fun.</p>
    <h2>Follow us on Social Media</h2>
    <div class="social">
      <a href="#" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
      <a href="#" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
      <a href="#" target="_blank"><i class="fab fa-github fa-3x"></i></a>
      <a href="#" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
    </div>
    <a class="go-up" href="#main"><i class="fas fa-arrow-up"></i></a>
  </section>
</template>

<script>
export default {
  name: 'Footer',
 
}
</script>

<style scoped>
#footer {
  padding: 40px;
  text-align: center;
  position: relative;
  background: var(--white-color);
}

#footer h1 {
  user-select: none;
}

#footer p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: auto;
}

#footer h2 {
  margin: 30px 0;
  color: var(--primary-color)
}

.social a {
  margin-left: 5px;
  color: var(--primary-color)
}

.go-up {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: var(--white-color);
  background: var(--secondary-color);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>
