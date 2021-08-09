<template>
  <a-layout style="background-color: #F6F6FE;min-height: 100vh">

    <a-layout-content>
      <a-row>
        <a-col span="12" style="padding: 3%">
          <a-row gutter="16">
            <a-col span="24">
              <a-card class="card-3 "  style="margin-bottom: 1rem">
                <a-row>
                  <a-col :span="16">
                    <a-statistic
                        title="Buy"
                        :value="btc_buy.amount"
                        :precision="2"
                        suffix="USD"
                        :value-style="{ color: '#3f8600' }"
                        style="margin-right: 50px"
                    >

                    </a-statistic>
                    <a-statistic
                        title="Sell"
                        :value="btc_sell.amount"
                        :precision="2"
                        suffix="USD"
                        class="demo-class"
                        :value-style="{ color: '#cf1322' }"
                    >

                    </a-statistic>











                  </a-col>
                  <a-col :span="8">
                    <div >
                      <img
                          class="card-img-top"


                          alt="example"
                          src="@/assets/images/bitcoin.svg"


                      />
                    </div>

                  </a-col>
                </a-row>




              </a-card>

            </a-col>
            <a-col span="24">
              <a-card class="card-3 "  style="margin-bottom: 1rem">
                <a-row>
                  <a-col :span="16">

                    <a-statistic
                        title="Buy"
                        :value="eth_buy.amount"
                        :precision="2"
                        suffix="USD"
                        :value-style="{ color: '#3f8600' }"
                        style="margin-right: 50px"
                    >

                    </a-statistic>
                    <a-statistic
                        title="Sell"
                        :value="eth_sell.amount"
                        :precision="2"
                        suffix="USD"
                        class="demo-class"
                        :value-style="{ color: '#cf1322' }"
                    >

                    </a-statistic>




                  </a-col>
                  <a-col :span="8">
                    <div >
                      <img
                          class="card-img-top"
                          style="border-radius: 2%"

                          alt="example"
                          src="@/assets/images/ethereum.svg"


                      />
                    </div>

                  </a-col>
                </a-row>




              </a-card>

            </a-col>
          </a-row>
          <a-row gutter="16">
            <a-col span="24">
              <a-card class="card-3 "  style="margin-bottom: 1rem">
                <a-row>
                  <a-col :span="16">
                    <a-statistic
                        title="Buy"
                        :value="lite_buy.amount"
                        :precision="2"
                        suffix="USD"
                        :value-style="{ color: '#3f8600' }"
                        style="margin-right: 50px"
                    >

                    </a-statistic>
                    <a-statistic
                        title="Sell"
                        :value="lite_sell.amount"
                        :precision="2"
                        suffix="USD"
                        class="demo-class"
                        :value-style="{ color: '#cf1322' }"
                    >

                    </a-statistic>


                  </a-col>
                  <a-col :span="8">
                    <div >
                      <img
                          class="card-img-top"
                          style="border-radius: 2%"

                          alt="example"
                          src="@/assets/images/litecoin.svg"


                      />
                    </div>

                  </a-col>
                </a-row>




              </a-card>

            </a-col>
            <a-col span="24">
              <a-card class="card-3 "  style="margin-bottom: 1rem">
                <a-row>
                  <a-col :span="16">
                    <a-statistic
                        title="Buy"
                        :value="doge_buy.amount"
                        :precision="2"
                        suffix="USD"
                        :value-style="{ color: '#3f8600' }"
                        style="margin-right: 50px"
                    >

                    </a-statistic>
                    <a-statistic
                        title="Sell"
                        :value="doge_sell.amount"
                        :precision="2"
                        suffix="USD"
                        class="demo-class"
                        :value-style="{ color: '#cf1322' }"
                    >

                    </a-statistic>


                  </a-col>
                  <a-col :span="8">
                    <div >
                      <img
                          class="card-img-top"
                          style="border-radius: 2%"

                          alt="example"
                          src="@/assets/images/doge.svg"


                      />
                    </div>

                  </a-col>
                </a-row>




              </a-card>

            </a-col>
          </a-row>

        </a-col>
        <a-col span="12" style="padding: 3%">
          <img style="width: 100%" src="@/assets/images/m1.jpg">

          <p class="maintitle scale-in-centerheader">To The Mooooooooooooooon </p>
          <p style="font-family: sofia_prolight">(refreshes every 5 secs)</p>

        </a-col>



      </a-row>

    </a-layout-content>

  </a-layout>

</template>

<script>
const axios = require('axios');
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      btc_buy: 0,
      btcstate:false,
      btc_sell: 0,
      eth_buy: 0,
      ethstate:false,
      eth_sell: 0,
      doge_buy: 0,
      doge_sell: 0,
      dogestate:false,
      lite_buy: 0,
      lite_sell: 0,
      litestate:false



    };
  },
  async mounted() {
    this.Prices()


  },
  created() {
    this.interval = setInterval(() => this.Prices(), 5000);
  },
  methods: {
    Prices() {


      axios.get('https://api.coinbase.com/v2/prices/BTC-USD/buy')
          .then((resp)=>{
            if(resp.data.data.amount >this.btc_buy){
              this.btcstate = true
            }
            this.btc_buy = resp.data.data

          })
      axios.get('https://api.coinbase.com/v2/prices/BTC-USD/sell')
          .then((resp)=>{
            this.btc_sell = resp.data.data

          })
      axios.get('https://api.coinbase.com/v2/prices/ETH-USD/buy')
          .then((resp)=>{
            this.eth_buy = resp.data.data

          })
      axios.get('https://api.coinbase.com/v2/prices/ETH-USD/sell')
          .then((resp)=>{
            this.eth_sell = resp.data.data

          })
      axios.get('https://api.coinbase.com/v2/prices/DOGE-USD/buy')
          .then((resp)=>{
            this.doge_buy = resp.data.data

          })
      axios.get('https://api.coinbase.com/v2/prices/DOGE-USD/sell')
          .then((resp)=>{
            this.doge_sell = resp.data.data

          })
      axios.get('https://api.coinbase.com/v2/prices/LTC-USD/buy')
          .then((resp)=>{
            this.lite_buy = resp.data.data

          })
      axios.get('https://api.coinbase.com/v2/prices/LTC-USD/sell')
          .then((resp)=>{
            this.lite_sell = resp.data.data

          })



    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hellocard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color:white;


}
.maintitle {
  font-family: sofia_probold;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.36;
  letter-spacing: -1px;
  color: #007bff;

}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;
  height: 13rem;
}



.poolavatar {
  width: 30%;
  margin-top: 0.5rem;
}
.nine {

}

.errorMessage {
  color: #f5222d;
  font-family: sofia_prolight
}
.card-3 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  border-radius: .25rem;
  border: 0;
  -webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .05);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .05)
}

.card-img-top {
  width: 30%;
  /*height: 150px;*/

  /*object-fit: cover;*/
}


</style>
