<template>
 <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test">Test</router-link>
  </div>-->
  <router-view/>
</template>

<style>
* {
    box-sizing: border-box;
  }
body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#app {
  min-height: 100vh;
  min-width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
 
</style>

<script>


</script>
