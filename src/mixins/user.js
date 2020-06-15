const UserMixin = {
  computed: {
    userInfo: (vm) => vm.$store.__s('userInfo')
  },
  methods: {
    routerTo(name, params = {}) {
      this.$router.push({
        name,
        params
      })
    }
  }
}

export default UserMixin
