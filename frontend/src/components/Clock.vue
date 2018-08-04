<template>
  <div class="row center-align">
      <div class="col s12">
          <h1>{{ time }}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data: function() {
      return {
          time: 'hello'
      }
  },
  mounted: function() {
      setInterval(() => {
          let d = new Date();
          let h = d.getHours()%12;
          let m = (d.getMinutes()<10?'0':'') + d.getMinutes();
          let s = (d.getSeconds()<10?'0':'') + d.getSeconds();
          this.$data.time = h + ":" + m + ":" + s;
      }, 1000);
  }
}
</script>

