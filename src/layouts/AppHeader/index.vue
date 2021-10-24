<template>
  <header class="app-header place-between">
    <atom-image
      class="hover-opacity-7 mx-2"
      src="https://www.knawat.com/wp-content/themes/knawatv4/dist/images/logo_56c11528.svg"
      alt="knawat-logo"
      width="100"
      height="100"
    ></atom-image>
    <div
      @mouseover="isOpen = true"
      @mouseleave="isOpen = false"
      class="hover-opacity-7 flat h-full relative w-32 place-center bg-regent-grey text-white"
    >
      <atom-image class="mr-2" :src="require('~/assets/icons/basket.svg')" />
      {{ basket.length }}
    </div>

    <organism-card
      v-if="isOpen"
      no-paddings
      shadow
      flat
      color="snow-drift"
      class="absolute md:w-3/6 right-px	top-20  w-full p-4 fade-in z-10"
    >
      <template v-if="basket.length">
        <template v-for="({ price, title }, index) in basket">
          <div class="place-between font-size-14 text-mid-grey" :key="`basket-item-${index}`">
            <span>{{ title }}</span>
            <span> {{ price }} &#8378;</span>
          </div>
          <atom-divider class="my-2" :key="`basket-divider-${index}`" />
        </template>
        <span class="float-right font-size-14"
          >{{ $t('basket.generalTotalAmount') }} :
          <strong>{{ totalPrice.toFixed(2) }} &#8378;</strong>
        </span>
      </template>
      <atom-no-data-card
        :description="$t('product.description.noProductInBasket')"
        color="white"
        v-else
      ></atom-no-data-card>
    </organism-card>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Basket } from '@/src/models/product';

export default Vue.extend({
  name: 'AppNavbar',
  data(): { isOpen: boolean } {
    return {
      isOpen: false,
    };
  },
  computed: {
    totalPrice() {
      return (this as any).basket.reduce(
        (accum: number, { price }: { price: number }) => accum + price,
        0,
      );
    },
    basket(): Array<Basket> {
      return this.$store.getters['basket/getBasket'];
    },
  },
});
</script>
