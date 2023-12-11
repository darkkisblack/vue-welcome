<template>
  <nav>
    <router-link class="router-link" v-if="$route.name !== 'home'" to="/">
      Главная страница
    </router-link>
  </nav>
  <router-view />
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  animation: gradientAnimation 10s infinite alternate;
  overflow: hidden;
  margin: 0;
  padding: 0;
  min-height: 100%;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

nav {
  margin-top: 10px;
}
</style>
