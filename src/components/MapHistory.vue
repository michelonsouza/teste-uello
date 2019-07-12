<template>
  <gmap-map
    :center="center"
    :zoom="13"
    map-type-id="terrain"
    style="width: 100%; height: 300px"
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
    };
  },
  beforeMount() {
    this.getPosition();
  },
  methods: {
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

      const myPosition = { icon: `${process.env.VUE_APP_HOST}/img/marker.svg`, position: this.center };

      markersArr.push(clientmark);
      markersArr.push(myPosition);

      return markersArr;
    },
  },
};
</script>

<style>

</style>
