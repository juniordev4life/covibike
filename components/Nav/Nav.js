export default {
  name: 'Nav',
  data: () => ({}),
  components: {
    Login: () => import('../Login/Login.vue')
    // VFacebookLogout: () => import('vue-facebook-login-component')
  },
  computed: {
    avatarUrl() {
      return this.$store.state.avatarUrl
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  },
  mounted() {},
  methods: {
    showLogin() {
      if (this.isLoggedIn) {
        this.$modal.show('profile')
      } else {
        this.$modal.show('login')
      }
    },
    logoutFacebook() {
      this.$store.commit('resetAvatarUrl')
      this.$store.commit('updateIsLoggedIn', false)
      this.$modal.hide('profile')
    }
  }
}
