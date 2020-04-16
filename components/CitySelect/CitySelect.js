export default {
  name: 'CitySelect',
  data: () => ({
    cityselect: '52.519444|13.406667'
  }),
  methods: {
    selectCity() {
      this.$emit('selectCity', this.cityselect)
    }
  }
}
