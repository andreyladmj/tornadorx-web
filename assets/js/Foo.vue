<template>
  <div class="home">
    <h1>Home {{msg}}</h1>
  </div>
</template>
<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>