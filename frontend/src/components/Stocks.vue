<template>
  <div class="row left-align white-text">
      <div class="col s4 z-depth-3 left-align" id="stocks">
          <div class="row flow-text" v-for="stock in stocks" :key="stock.id" id="indivStock">
            <p class="col s6">{{stock}}</p>
            <p class="col s6 right-align">${{ stockPrices[stock] }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

const stockURL = "https://api.iextrading.com/1.0/stock/";

export default {
  name: "Stocks",
  data: function() {
    return {
      stocks: ["Apple", "Google", "Tesla", "Amazon"],
      stockTickers: {
        'Apple': "aapl",
        'Google': "goog",
        'Tesla': "tsla",
        'Amazon': "amzn",
      },
      stockPrices: {
        'Apple': null,
        'Google': null,
        'Tesla': null,
        'Amazon': null,
      }
    };
  },

  // get stock prices on mount
  mounted: function() {
    for (let i = 0; i < this.$data.stocks.length; i++) {
      axios
        .get(
          `${stockURL}${this.$data.stockTickers[this.$data.stocks[i]]}/price`
        )
        .then(response => this.$data.stockPrices[this.$data.stocks[i]] = response.data);
    }
  }
};
</script>

<style scoped>
#stocks {
  border: solid black 2px;
  background: rgba(0, 0, 0, 0.5);
  max-height: 40vh;
  overflow-y: auto;
}

#indivStock > p {
  height:0px;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
</style>


