<template>
  <gmap-map
    :center="center"
    :zoom="13"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
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
      default: {},
    },
    address: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(process.env.VUE_APP_GOOGLE_MAPS_KEY, this.markers);
  },
  computed: {
    markers() {
      const markersArr = [];
      let dmark;

      if (this.driver) {
        const { latitude: lat, longitude: lng } = this.driver.geolocation;
        dmark = {icon: `${process.env.VUE_APP_HOST}/img/caminh-o.svg`, position: {lat, lng} };
        markersArr.push(dmark);
      }

      const { latitude: lat, longitude: lng } = this.address.geolocation;
      const clientmark = { icon: `${process.env.VUE_APP_HOST}/img/ic-pin.svg`, position: { lat, lng } };

      markersArr.push(clientmark);

      return markersArr;
    },
    center() {
      const { latitude: latadd, longitude: lngadd } = this.address.geolocation;
      if (this.driver) {
        const { latitude, longitude } = this.driver.geolocation;
        const lat = latadd > latitude ? ((latdd - latidude) + latitude) : ((latitude - latadd) / 2 + latadd);
        const lng = lngadd > latitude ? ((lngadd - longitude) + longitude) : ((longitude - lngadd) / 2 + lngadd);

        return { lat, lng };
      } else {
        return {lat: latadd, lng: lngadd};
      }
    }
  }
}
</script>

<style>

</style>
