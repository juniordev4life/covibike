const defaultAvatarUrl = '/user-avatar.svg'

export const state = () => ({
  avatarUrl: defaultAvatarUrl,
  isLoggedIn: false,
  askForLocation: false,
  loginData: {}
})

export const mutations = {
  setAvatarUrl(state, avatarUrl) {
    state.avatarUrl = avatarUrl
  },
  resetAvatarUrl(state) {
    state.avatarUrl = defaultAvatarUrl
  },
  updateIsLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  },
  updateAskForLocation(state, askForLocation) {
    state.askForLocation = askForLocation
  },
  updateLoginData(state, loginData) {
    state.loginData = loginData
  }
}
