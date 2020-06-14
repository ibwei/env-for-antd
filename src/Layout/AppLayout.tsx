import { Vue, Component } from 'vue-property-decorator'
import config from '@/utils/config'
import HomeLayout from './HomeLayout.vue'
import './AppLayout.less'

@Component({
  name: 'applayout',
  components: {
    HomeLayout
  }
})
export default class AppLayout extends Vue {
  render() {
    if (config.fullPages.indexOf(this.$route.path) > -1) {
      return (
        <div class='app-full'>
          <router-view />
        </div>
      )
    }
    return (
      <div class='app-homepage'>
        <home-layout></home-layout>
      </div>
    )
  }
}
