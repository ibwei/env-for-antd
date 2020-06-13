import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'lend'
})
export default class Comment extends Vue {
  render() {
    return (
      <div>
        <router-view />
      </div>
    )
  }
}
