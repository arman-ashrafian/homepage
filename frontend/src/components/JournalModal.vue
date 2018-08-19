<template>
  <div id="journalModal" class="modal">
    <div class="modal-content green-text">
      <h4 class="center-align">{{ date }}</h4>
      <textarea spellcheck="false" id="journalEntry" 
      class="materialize-textarea green-text flow-text">
      </textarea>
    </div>
    <div class="modal-footer">
      <p id="saveBtn" class="modal-close waves-effect waves-green btn blue">Save</p>
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
    // triggered when calender date is clicked
    dateBus.$on('dateSelected', (month, day, year) => {
      this.date = `${month} - ${day} - ${year}`
      this.month = month
      this.day = day
      this.year = year
    })
  }
};
</script>

<style scoped>

.modal, .modal-footer {
  background-color: rgba(0,0,0,.75)
}

/* remove scrollbar */
::-webkit-scrollbar {
    width: 0px;
}
</style>

