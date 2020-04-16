export default {
  name: 'ModalDetails',
  props: {
    details: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: () => {
        return null
      }
    }
  },
  methods: {
    hideDetails() {
      this.$modal.hide('details')
    }
  }
}
