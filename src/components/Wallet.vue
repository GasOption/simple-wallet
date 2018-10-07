<template>
  <div class="home">
    <div class="header">
      <img class="logo" src="../assets/logo.png">
      <div style="float: right">
        welcome {{address}}, balance: {{balance}} ether
      </div>
    </div>

    <div class="input-group">
      <label>To:</label>
      <input v-model="to" />
    </div>

    <div class="input-group">
      <label>ETH Value:</label>
      <input v-model="value" />
    </div>

    <div class="input-group">
      <label>Data:</label>
      <input v-model="data" />
    </div>

    <div class="input-group">
      <label>Gas Price Max:</label>
      <input v-model="gasPriceMax" />
    </div>

    <div class="input-group">
      Estimate gasprice: {{gasPriceMax / 2.5}} ~ {{ (gasPriceMax / 1.8).toFixed(0) }}, Max {{ gasPriceMax }}
    </div>

    <div class="input-group">
      <button :disabled="sending" class="primary" v-on:click="send">GO</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  text-align: left;
  padding: 0 100px;
}
.logo {
  width: 100px!important;
}
</style>

<script>
import { getWeb3 } from "../lib/eth";
const web3 = getWeb3();

export default {
  name: 'Wallet',

  methods: {
    async send() {
      this.sending = true;

      const tx = await web3.eth.sendTransaction({
        to: this.to,
        value: web3.toWei(this.value, 'ether')
      });

      alert(tx + ' submitted.');

      this.sending = false;
    }
  },

  async mounted() {
    this.balance = web3.fromWei(await web3.eth.getBalance(web3.eth.defaultAccount)).toNumber().toFixed(4);
    this.gasPriceMax = (await web3.eth.getGasPrice()).toNumber() / 500000000;
  },

  data () {
    return {
      sending: false,
      address: web3.eth.defaultAccount,
      balance: 0,
      to: '',
      gasPriceMax: null,
      insurance: false,
      data: '',
      value: 0
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 600px;
}
</style>
