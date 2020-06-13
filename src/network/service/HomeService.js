import Vue from 'vue'
class HomeService extends Vue {
  getSliders(params) {
    return this.$post('findSlideshows', params)
  }
  getHuobiList(params) {
    return this.$post('getHuobiList', params)
  }
}

export default new HomeService()
