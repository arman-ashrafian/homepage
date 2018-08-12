<template>
    <div class="calendar col s4 z-depth-3 white-text">
      <div id="month">{{monthLabels[7]}}</div>
      <div :class="{ 'highlight-day': day === today.getDate() }"
           class="day center-align" v-for="day in daysInMonths[7]"
           :key="day">
           {{ day }}
      </div>
    </div>
</template>


<script>
export default {
  name: "Calendar",
  data: function() {
    return {
      today: new Date(),
      daysInMonths: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dayLabels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      monthLabels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    }
  }
};
</script>

<style scoped>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(60px, auto);
  border: solid black 2px;
  background: rgba(0, 0, 0, 0.7);
  max-height: 40vh;
  padding-bottom: 5px;
}

.day {
  font-size: 20pt;
}

#month {
  font-size: 30pt;
  grid-column: 1 / 8;
  text-align: center;
}

.highlight-day {
  background-color: rgba(3,169,244,0.7);
  margin-bottom: 2vh;
}
</style>
