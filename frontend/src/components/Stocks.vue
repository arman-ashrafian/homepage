<template>
    <div class="col s4 z-depth-3 white-text" id="stocks">
        <div class="row flow-text" v-for="stock in stocks" :key="stock.id" id="indivStock">
          <p class="col s4 left-align stockName">{{stock.stock}}</p>
          <p class="col s5 right-align">${{ stock.price }}</p>
          <p class="col s3 right-align" :class="stock.color">{{ stock.percent }}%</p>
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
      stocks: [
        {stock: 'Apple', ticker: 'aapl', price: null, percent: null, color: 'white-text'},
        {stock: 'Google', ticker: 'goog', price: null, percent: null, color: 'white-text'},
        {stock: 'Tesla', ticker: 'tsla', price: null, percent: null, color: 'white-text'},
        {stock: 'Amazon', ticker: 'amzn', price: null, percent: null, color: 'white-text'},
        {stock: 'Microsoft', ticker: 'msft', price: null, percent: null, color: 'white-text'},
      ]
    };
  },

  methods: {
    getStockPrice(index) {
      return axios
        .get(
          `${stockURL}${this.stocks[index].ticker}/price`
        )
    },

    getStockPercentage(index) {
      return axios
        .get(
          `${stockURL}${this.stocks[index].ticker}/previous`
        )
    },

    updateAllStockData() {
      for(let i = 0; i < this.stocks.length; i++) {
        axios.all([this.getStockPrice(i), this.getStockPercentage(i)])
          .then(axios.spread((priceResp, percResp) => {
            this.stocks[i].price = priceResp.data;
            this.stocks[i].percent = percResp.data.changePercent
            
            // round to 2 decimal points
            this.stocks[i].percent = Math.round(this.stocks[i].percent * 100) / 100;
            // choose percentage color based on sign
            this.stocks[i].color = this.stocks[i].percent >= 0 ? 'green-text' : 'red-text';
          }))
      }
    }
  },

  // get stock stats on mount
  mounted() {
    this.updateAllStockData()
    setInterval(this.updateAllStockData, 30000)
  }
};
</script>

<style scoped>
#stocks {
  border: solid black 2px;
  background: rgba(0, 0, 0, 0.7);
  max-height: 40vh;
  width: 30vw;
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


