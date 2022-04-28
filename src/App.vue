<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="throwError">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div @click="handler">123123132</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    setTimeout(() =>{
      throw new Error('延迟5s抛出异常');
    },5000)
  },
  methods: {
    throwError(){
      console.log(window.a.b);
    },
    handler(){
      throw new Error('抛出异常');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
