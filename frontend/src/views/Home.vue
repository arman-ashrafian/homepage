<template>
  <div class="home">
    <Clock/>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'

export default {
  name: 'home',
  components: {
    Clock
  }
}
</script>

<style>
html {
  background-image: url('.././assets/m.jpg')
}
</style>


