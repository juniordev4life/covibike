import Vue from 'vue'
import vCookieAcceptDecline from 'vue-cookie-accept-decline'

const VueCookieAcceptDecline = {
  install(Vue, options) {
    Vue.component('VueCookieAcceptDecline', vCookieAcceptDecline)
  }
}
Vue.use(VueCookieAcceptDecline)
