<template>
  <div id="app">
    <app-header />
    <b-container class="mt-5">
      <info-list />
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import InfoList from './components/InfoList.vue';

export default {
  name: 'app',
  components: {
    appHeader: Header,
    InfoList,
  },
};
</script>
