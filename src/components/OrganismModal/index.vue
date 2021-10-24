<template>
  <portal to="modal-portal">
    <div
      class="organism-modal__overlay place-center"
      @click="closeOnOutSideClick && $emit('on-close')"
    >
      <div class="organism-modal__content p-3 flex flex-col" v-bind="containerOptions">
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

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OrganismModal',
  props: {
    size: {
      type: String,
      default: 'sm',
      validator: (val: string) => ['sm', 'md', 'lg', 'xl'].includes(val),
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
    color: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    containerOptions(): {
      class: Record<string, boolean | string>;
    } {
      return {
        class: {
          'organism-modal__fullscreen-on-mobile': this.fullScreenOnMobile,
          [`organism-modal__${this.size}`]: true,
          [`bg-${this.color}`]: true,
          'rounded-0': this.flat || this.fullScreenOnMobile,
          ...this.$attrs,
        },
      };
    },
  },
  created() {
    (document.querySelector('body') as HTMLElement).classList.add('overflow-hidden');
  },
  destroyed() {
    (document.querySelector('body') as HTMLElement).classList.remove('overflow-hidden');
  },
});
</script>
