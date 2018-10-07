<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-group {
  margin: 0 auto;
  width: 600px;
  margin-top: 10px;
}

.input-group>label {
  display: inline-block;
  text-align: right;
  width: 170px;
}

.input-group>input {
  display: inline-block;
  text-align: left;
  width: 400px;
  font-size: 15px;
  padding: 5px;
}

.input-group>button {
  font-size: 15px;
  padding: 10px;
  margin: 10px auto;
}
</style>
