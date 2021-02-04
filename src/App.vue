<template>
  <div id="app">
    <div id="nav" class="bg-gray-900 md:flex justify-between mb-4">
      <div class="flex justify-between items-center">
        <img src="./assets/img/logo.png" />

        <div class="px-4 cursor-pointer md:hidden" id="iconOpen">
          <svg
            class="w-8 text-white font-bold"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <ul
        class="md:flex items-center justify-between hidden md:block z-40 mt-2 md:mt-0 bg-gray-900"
        id="menu"
      >
        <li class="mb-2 md:mb-0"><router-link to="/" class="lg:mx-4 mx-2">Home</router-link></li>
        <li class="mb-2 md:mb-0">
          <router-link to="/about" class="lg:mx-4 mx-2">About</router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/properties" class="lg:mx-4 mx-2">Properties </router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/evaluation" class="lg:mx-4 mx-2">EVALUATION </router-link>
        </li>
        <li class="mb-6 md:mb-0">
          <router-link to="/contact" class="lg:mx-4 mx-2">Contact Us </router-link>
        </li>
        <li class="mb-2 md:mb-0">
          <router-link to="/lookingfor" class="lookingFor bg-yellow-500 p-2 md:p-4 lg:mx-4 mx-2"
            >Looking for ?</router-link
          >
        </li>
      </ul>
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
