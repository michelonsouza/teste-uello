<template>
  <div id="app">
    <app-header :name="request.name"  />
    <b-container class="mt-5">
      <info-list v-if="request.name" :infos="request" />
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

import Header from './components/Header.vue';
import InfoList from './components/InfoList.vue';

export default {
  name: 'app',
  data() {
    return {
      request: {},
    };
  },
  components: {
    appHeader: Header,
    InfoList,
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await axios.get('/api.json');
      const index = Math.floor(Math.random() * (4 - 0) + 0);
      this.request = data[index];
    },
  },
};
</script>

<style lang="scss">
.app_uello__marker-logo {
  width: 28px;
  height: 28px;
}
</style>
