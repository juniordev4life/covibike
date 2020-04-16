let L = { icon() {} }
if (process.browser) L = require('leaflet')

export default {
  name: 'Map',
  layout: 'map',
  components: {
    CitySelect: () => import('@/components/CitySelect/CitySelect.vue'),
    ModalDetails: () => import('@/components/ModalDetails/ModalDetails.vue')
  },
  data: () => ({
    mapCenter: [52.519444, 13.406667],
    zones: null,
    zoneOpacity: 0.1,
    locations: null,
    stationMarkerUrl: '~/assets/station-marker.svg',
    stationEmptyMarkerUrl: '~/assets/station-marker-empty.svg',
    icon: L.icon({
      iconUrl: 'https://www.marco-slusalek.de/covibike-marker.svg',
      iconSize: [50, 56],
      iconAnchor: [25, 56]
    }),
    iconStation: L.icon({
      iconUrl: 'https://www.marco-slusalek.de/covibike-marker.svg',
      iconSize: [36, 42],
      iconAnchor: [18, 42]
    }),
    locationsDetails: {
      address: '',
      id: '',
      freeBikes: [
        {
          brand: {
            name: '',
            id: ''
          },
          number: ''
        }
      ]
    },
    loading: true,
    geoLocationPermision: false
  }),
  computed: {
    askForLocation() {
      return this.$store.state.askForLocation
    }
  },
  created() {},
  mounted() {
    /*
    // Not working with permission.query on ios Safarai (no support)
    this.checkGeoLocationPermission()
    */
    if (!this.askForLocation) {
      const vm = this
      setTimeout(function() {
        vm.$modal.show('askforlocation')
      }, 1000)
    }
    this.getData({ lat: this.mapCenter[0], lng: this.mapCenter[1] }, 1)
  },
  methods: {
    async getData(fromGeoPoint, zoneOption) {
      const vm = this
      this.loading = true
      try {
        await this.$axios
          .get(
            'https://www.marco-slusalek.de/covibike-api/get/bikeData.php?&zones=1&lat=' +
              fromGeoPoint.lat +
              '&lon=' +
              fromGeoPoint.lng +
              '&zones=' +
              zoneOption
          )
          .then((response) => {
            vm.locations = response.data.locations
            vm.zones = response.data.zones
            vm.loading = false
          })
          .catch(function() {
            // console.log('error')
          })
      } catch (error) {
        // console.log('error')
      }
    },
    updateCenter(newCenterGeoPoint) {
      this.mapCenter = [newCenterGeoPoint.lat, newCenterGeoPoint.lng]
      this.getData(newCenterGeoPoint, 1)
    },
    showDetails(location) {
      this.locationsDetails = location
      this.$modal.show('details')
    },
    updateMap(selectedCity) {
      this.mapCenter = selectedCity.split('|')
    },
    shareLocation() {
      const vm = this
      vm.$modal.hide('askforlocation')
      this.loading = true
      this.geoLocationPermision = true
      this.$store.commit('updateAskForLocation', true)
      navigator.geolocation.getCurrentPosition(function(position) {
        vm.updateMap(position.coords.latitude + '|' + position.coords.longitude)
      })
    },
    closeAskForLocation() {
      this.geoLocationPermision = false
      this.$modal.hide('askforlocation')
    },
    checkGeoLocationPermission() {
      const vm = this
      if (navigator.geolocation) {
        navigator.permissions
          .query({
            name: 'geolocation'
          })
          .then((permission) => {
            if (permission.state === 'granted') {
              vm.shareLocation()
              vm.$store.commit('updateAskForLocation', true)
              vm.getData({ lat: vm.mapCenter[0], lng: vm.mapCenter[1] }, 1)
            } else {
              this.loading = false
              vm.$store.commit('updateAskForLocation', true)
            }
            if (!this.askForLocation) {
              const vm = this
              setTimeout(function() {
                vm.$modal.show('askforlocation')
              }, 1000)
            }
          })
      }
    }
  }
}
