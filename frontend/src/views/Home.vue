<template>
  <div class="home">
    <Clock/>
    <Stocks/>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'
import Stocks from '@/components/Stocks.vue'

export default {
  name: 'home',
  data: function() {
    return {
      info: null
    }
  },
  components: {
    Clock,
    Stocks
  }
}
</script>

<style>
html {
  background-image: url('.././assets/m.jpg');
  background-repeat: 'no';
  background-size: 'auto';

}
</style>


