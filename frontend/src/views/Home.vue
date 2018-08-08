<template>
  <div class="home">
    <Clock/>
    
    <div class="row left-align white-text">
      <Stocks/>
      <div class="col s2"></div>
      <Calender/>  
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
import Stocks from "@/components/Stocks.vue";
import Calender from "@/components/Calender.vue"

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
    Calender
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


