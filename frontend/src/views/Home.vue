<template>
  <div class="home">
    <HelloWorld msg="Mah Doods!"/>
    <router-link to='/about'>About</router-link>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
