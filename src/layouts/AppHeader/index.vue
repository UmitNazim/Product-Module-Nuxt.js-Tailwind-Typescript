<template>
  <header class="app-header place-items-between">
    <atom-image
      class="hover-opacity-7 mx-2"
      src="https://www.knawat.com/wp-content/themes/knawatv4/dist/images/logo_56c11528.svg"
      alt="knawat-logo"
      width="100"
      height="100"
    ></atom-image>
    <atom-button
      @mouse-over="isOpen = true"
      @mouse-leave="isOpen = false"
      size="md"
      flat
      class="hover-opacity-7 flat h-full relative w-32"
    >
      <atom-image class="mr-2" :src="require('~/assets/icons/basket.svg')" />
      {{ basket.length }}
    </atom-button>

    <organism-card
      v-if="isOpen"
      no-padding
      shadow
      flat
      color="snow-drift"
      class="absolute md:w-2/5 right-px	top-20  w-full p-4 fade-in z-10"
    >
      <template v-if="basket.length">
        <template v-for="({ price, title }, index) in basket">
          <div
            class="place-items-between font-size-14 text-mid-grey"
            :key="`basket-item-${index}`"
          >
            <span>{{ title }}</span>
            <span> {{ price }} &#8378;</span>
          </div>
          <atom-divider class="my-2" :key="`basket-divider-${index}`" />
        </template>

        <span class="float-right"
          >Total Price :
          <strong>{{ totalPrice.toFixed(2) }} &#8378;</strong>
        </span>
      </template>
      <atom-no-data-card
        description="No Data Yet"
        color="white"
        v-else
      ></atom-no-data-card>
    </organism-card>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    totalPrice() {
      return this.basket.reduce((accum, { price }) => accum + price, 0);
    },
    basket() {
      return this.$store.getters['basket/getBasket'];
    },
  },
};
</script>
