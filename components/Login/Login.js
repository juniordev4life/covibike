export default {
  name: 'Login',
  data: () => ({}),
  components: {
    VFacebookLogin: () => import('vue-facebook-login-component')
  },
  computed: {
    loginData() {
      return this.$store.state.loginData
    }
  },
  methods: {
    loginFacebook() {
      const vm = this
      window.FB.api('/me', 'GET', { fields: 'id,name,picture,email' }, function(
        response
      ) {
        vm.$store.commit('setAvatarUrl', response.picture.data.url)
        vm.$store.commit('updateIsLoggedIn', true)
        vm.$store.commit('updateLoginData', {
          name: response.name,
          email: response.email
        })
        vm.$modal.hide('login')
      })
    },
    logoutFacebook() {
      this.$store.commit('resetAvatarUrl')
      this.$store.commit('updateIsLoggedIn', false)
      this.$modal.hide('login')
    }
  }
}
