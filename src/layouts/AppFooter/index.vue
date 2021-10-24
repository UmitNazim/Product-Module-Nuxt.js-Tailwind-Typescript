<template>
  <footer class="app-footer text-center">
    <div class="app-footer__content">
      <span>
        &copy;{{ year }} <span class="mx-3">&#8226;</span>
        {{ $t('general.brandPolicy') }}
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppFooter',
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
});
</script>
