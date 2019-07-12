import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    region: 'BR',
    language: 'pt',
    key: process.env.VUE_APP_GOOGLE_MAPS_KEY,
    libraries: 'places',
  },
  installComponents: true,
});
