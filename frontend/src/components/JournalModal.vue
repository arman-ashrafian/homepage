<template>
  <div id="journalModal" class="modal">
    <div class="modal-content black-text">
      <h4>{{ date }}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio tenetur error earum dicta atque ea, facere asperiores odio, necessitatibus tempore sequi quibusdam ab voluptas, possimus consectetur repellendus perferendis temporibus ad?
      </p>
    </div>
    <div class="modal-footer">
      <p class="modal-close waves-effect waves-green btn-flat">Save</p>
    </div>
  </div>
</template>

<script>
import { dateBus } from "../main.js"

export default {
  name: "JournalModal",
  data: function() {
    return {
      date: null,
      day: null,
      month: null,
      year: null,
    }
  },
  created() {
    dateBus.$on('dateSelected', (month, day, year) => {
      this.date = `${month} - ${day} - ${year}`
      this.month = month
      this.day = day
      this.year = year
    })
  }
};
</script>
