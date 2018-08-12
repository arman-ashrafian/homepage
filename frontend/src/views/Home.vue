<template>
  <div class="home">
    <Clock/>
    
    <div class="row left-align white-text">
      <Stocks/>
      <div class="col s2"></div>
      <Calendar/>  
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
import Stocks from "@/components/Stocks.vue";
import Calendar from "@/components/Calendar.vue"

export default {
  name: "home",
  data: function() {
    return {
      info: null
    };
  },
  components: {
    Clock,
    Stocks,
    Calendar
  }
};
</script>

<style>
html {
  background-image: url(".././assets/m.jpg");
  background-repeat: "no";
  background-size: "auto";
}
</style>


