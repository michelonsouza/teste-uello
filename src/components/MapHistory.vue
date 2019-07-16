<template>
  <gmap-map
    :center="getCenter"
    :zoom="13"
    map-type-id="terrain"
    style="width: 100%; height: 300px"
    ref="map"
  >
    <gmap-marker
      v-for="(marker, index) in markers"
      :key="index"
      :position="marker.position"
      :clickable="true"
      :draggable="true"
      :icon="marker.icon"
      @click="center=marker.position"
    />
  </gmap-map>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  props: {
    driver: {
      type: Object,
      default: () => {},
    },
    address: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      center: {},
      directionsService: {},
      directionsDisplay: {},
    };
  },
  beforeMount() {
    this.getPosition();
  },
  mounted() {
    setTimeout(() => {
      this.getRoute();
    }, 500);
  },
  methods: {
    getRoute() {
      if (this.driver) {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(this.$refs.map.$mapObject);
        this.directionsDisplay.setOptions({ suppressMarkers: true });
        var vm = this;

        vm.directionsService.route({
          origin: this.markers[1].position,
          destination: this.markers[0].position,
          travelMode: 'DRIVING'
        }, (response, status) => {
          if (status === 'OK') {
            vm.directionsDisplay.setDirections(response)
          } else {
            console.log(`Directions request failed due to ${status}`)
          }
        })
      }
    },
    getPosition() {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        });
      }

      return null;
    },
  },
  computed: {
    markers() {
      const markersArr = [];
      let dmark;

      if (this.driver) {
        const { latitude: lat, longitude: lng } = this.driver.geolocation;
        dmark = { icon: `${process.env.VUE_APP_HOST}/img/caminh-o.svg`, position: { lat, lng } };
        markersArr.push(dmark);
      }

      const { latitude: lat, longitude: lng } = this.address.geolocation;
      const clientmark = { icon: `${process.env.VUE_APP_HOST}/img/ic-pin.svg`, position: { lat, lng } };

      markersArr.push(clientmark);

      return markersArr;
    },
    getCenter() {
      const { latitude, longitude } = this.address.geolocation;
      if (this.driver) {
        const { latitude: driLat, longitude: driLng } = this.driver.geolocation;

        const lat = latitude > driLat
          ? ((latitude - driLat) / 2 + driLat)
          : ((driLat - latitude) / 2 + latitude);
        const lng = longitude > driLng
          ? ((longitude - driLng) / 2 + driLng)
          : ((driLng - longitude) / 2 + longitude);

        return { lat, lng };
      }
      console.log(this.address.geolocation)
      return { lat: latitude, lng: longitude };
    },
  },
};
</script>

<style>

</style>
