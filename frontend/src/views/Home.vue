<template>
  <div class="home">
    <div class="row">
      <div class="col s12 center-align">
        <Clock/>
      </div>
    </div>
    
    <div class="row white-text">
      <Stocks/>
      <div class="col l1 s12"></div>
      <Calendar/>
      <JournalModal/>  
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
import Stocks from "@/components/Stocks.vue";
import Calendar from "@/components/Calendar.vue"
import JournalModal from "@/components/JournalModal.vue"

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
    Calendar,
    JournalModal,
  }
};
</script>

<style>
html {
  background-image: url(".././assets/m.jpg");
  background-repeat: "yes";
  background-size:auto;
}
</style>


