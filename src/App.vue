<template>
  <div id="app">
    <div id="nav" class="bg-gray-900 flex justify-between mb-4">
      <div>
        <img src="./assets/img/logo.png" />
      </div>
      <div class="navList">
        <router-link to="/" class="lg:mx-4 mx-2">Home</router-link
        ><router-link to="/about" class="lg:mx-4 mx-2">About</router-link>
        <router-link to="/properties" class="lg:mx-4 mx-2">Properties </router-link>
        <router-link to="#" class="lookingFor bg-yellow-500 p-4 lg:mx-4 mx-2"
          >Looking for ?</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 25px;
  margin: 0px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #df9523;
    }
  }
}
.navList {
  line-height: 61px;
}
</style>
