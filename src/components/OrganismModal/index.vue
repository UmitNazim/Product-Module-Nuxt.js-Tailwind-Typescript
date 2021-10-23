<template>
  <portal to="modal-portal">
    <div
      class="organism-modal__overlay place-center"
      @click="closeOnOutSideClick && $emit('on-close')"
    >
      <div v-bind="containerOptions" class="organism-modal__content p-3 flex flex-col">
        <header>
          <div class="place-between">
            <h5 class="font-size-14 m-0">{{ title }}</h5>
            <atom-button bg-color="transparent" @on-click="$emit('on-close')">
              <atom-image :src="require('~/assets/icons/close.svg')"
            /></atom-button>
          </div>
        </header>
        <main class="organism-modal__main my-3">
          <slot></slot>
        </main>
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  name: 'OrganismModal',
  props: {
    size: {
      type: String,
      default: 'sm',
      validator: val => ['sm', 'md', 'lg', 'xl'].includes(val),
    },
    closeOnOutSideClick: {
      type: Boolean,
      default: false,
    },
    fullScreenOnMobile: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    containerOptions() {
      return {
        class: {
          'organism-modal__fullscreen-on-mobile': this.fullScreenOnMobile,
          [`organism-modal__${this.size}`]: this.size,
          'rounded-0': this.flat || this.fullScreenOnMobile,
          ...this.$attrs,
        },
      };
    },
  },
  created() {
    document.querySelector('body').classList.add('overflow-hidden');
  },
  destroyed() {
    document.querySelector('body').classList.remove('overflow-hidden');
  },
};
</script>
