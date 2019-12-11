<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Acceuil</router-link>
      <router-link to="/about">A propos</router-link>
    </div>
    <p>Work in progress</p>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: 0;
  margin: 0;
    
}

#nav {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;

  border: 2px solid grey;
  border-collapse: collapse;

  display: flex;
  justify-content: center;
  align-items: center;  
  
  height: 35px;
  width: 120px;
  font-size: 22px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  position: fixed;
  left: 1em;
  font-size: 50px;
  font-weight: bold;
}
</style>
