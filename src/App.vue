<template>
  <div id="app">
    <!-- <div id="nav">
      <! <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/income">income and expenses</router-link>  -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">

body{
  min-height: 100vh;
   background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm222-mind-22_1_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3d5d85909cafb6e0f0de9905cf40ec01");
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
