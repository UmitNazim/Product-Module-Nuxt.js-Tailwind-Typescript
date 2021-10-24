<template>
  <div>
    <portal-target name="modal-portal" />
    <app-header />
    <app-body><nuxt /> </app-body>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppHeader from './AppHeader/index.vue';
import AppBody from './AppBody/index.vue';
import AppFooter from './AppFooter/index.vue';

export default Vue.extend({
  name: 'Default',
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
});
</script>
