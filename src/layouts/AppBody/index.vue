<template>
  <main class="app-body">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBody',
});
</script>
