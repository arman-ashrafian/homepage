<template>
  <div id="journalModal" class="modal">
    <div class="modal-content green-text">
      <h4 class="center-align">{{ date }}</h4>

      <textarea spellcheck="false" id="journalEntry" 
      class="materialize-textarea green-text flow-text"
      v-model="currentJournalText">
      </textarea>

    </div>
    <div class="modal-footer">
      <p 
      id="saveBtn" 
      class="modal-close waves-effect waves-green btn blue"
      @click="save()">Save</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { dateBus } from "../main.js";

export default {
  name: "JournalModal",
  data: function() {
    return {
      date: null,
      day: null,
      month: null,
      year: null,
      currentJournalText: ""
    };
  },
  created() {
    // triggered when calender date is clicked
    dateBus.$on("dateSelected", (month, day, year) => {
      this.date = `${month} - ${day} - ${year}`;
      this.month = month;
      this.day = day;
      this.year = year;
      // get the journal text for the day
      axios
        .get(`/journal/${this.month}/${this.day}/${this.year}`)
        .then(resp => {
          this.currentJournalText = resp.data
        })
        .catch(() => {
          window.location.href = '/GoogleLogin'
        });
    });
  },
  methods: {
    save: function() {
      axios.put(`/journal/${this.month}/${this.day}/${this.year}`,
      {
        body: this.currentJournalText
      }).catch(() => {
        window.location.href = '/GoogleLogin'
      })
    }
  }
};
</script>

<style scoped>
.modal,
.modal-footer {
  background-color: rgba(0, 0, 0, 0.75);
}

textarea {
  min-height: 40vh;
}

/* remove scrollbar */
::-webkit-scrollbar {
  width: 0px;
}
</style>

