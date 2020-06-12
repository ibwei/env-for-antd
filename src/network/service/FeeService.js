import Vue from 'vue'

class FeeService extends Vue {
  queryWithdrawFee() {
    return this.$post('queryWithdrawFee')
  }

  queryTradeFee() {
    return this.$post('queryTradeFee')
  }
}

export default new FeeService()
