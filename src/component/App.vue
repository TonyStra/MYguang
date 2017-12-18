<template>
  <main>
      <h1>{{title}}</h1> 
      <router-view></router-view>
  </main>
</template>

<script>
export default {
  data(){
      return{
          title:'vue.js!'
      }
  }
}
</script>

<style>
h1{
    font-size:30px;
    color:red;
}
</style>

