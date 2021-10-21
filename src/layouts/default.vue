<template>
  <div>
    <portal-target name="modal-portal" />
    <app-header />
    <app-body><nuxt /> </app-body>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

export default {
  name: 'Default',
  components: { AppHeader, AppBody, AppFooter },
};
</script>
